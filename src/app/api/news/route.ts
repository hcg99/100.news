import { NextResponse } from 'next/server';
import Parser from 'rss-parser';

// List of RSS feed URLs
const RSS_FEEDS = [
  // Free RSS Feeds
  'https://abcnews.go.com/abcnews/topstories',
  'https://www.africa.com/feed/',
  'https://www.aljazeera.com/xml/rss/all.xml',
  'https://feeds.bbci.co.uk/news/uk/rss.xml',
  'http://feeds.bbci.co.uk/news/world/rss.xml',
  'https://www.bloomberg.com/feed/podcast.xml',
  'https://www.businessinsider.com/rss',
  'https://www.bloomberg.com/feeds/podcasts/businessweek.xml',
  'https://www.buzzfeed.com/index.xml',
  'https://www.cbc.ca/cmlink/rss-topstories',
  'https://www.chicagotribune.com/arcio/rss/category/news/?ns=prod&lc=100',
  'https://www.cityam.com/feed/',
  'https://www.cnbc.com/id/100003114/device/rss/rss.html',
  'http://rss.cnn.com/rss/cnn_topstories.rss',
  'http://rss.cnn.com/rss/money_latest.rss',
  'https://www.dabafinance.com/feed',
  'https://www.dailymail.co.uk/articles.rss',
  'https://www.dailyrecord.co.uk/rss.xml',
  'https://rss.dw.com/rdf/rss-en-all',
  'https://www.digitaltrends.com/feed/',
  'https://www.euronews.com/rss?level=theme&name=news',
  'https://www.standard.co.uk/rss',
  'https://www.ft.com/?format=rss',
  'https://www.finimize.com/feed',
  'https://fortune.com/feed/',
  'https://feeds.foxnews.com/foxnews/latest',
  'https://www.france24.com/en/rss',
  'https://www.theglobeandmail.com/world/rss/',
  'https://www.gq.com/feed/rss',
  'https://inews.co.uk/feed',
  'https://www.investing.com/rss/news_25.rss',
  'https://www.investopedia.com/feedbuilder/feed/getfeed/?feedName=rss_headline',
  'https://www.itv.com/news/rss',
  'https://www.laweekly.com/feed/',
  'https://www.lbc.co.uk/rss/news/',
  'https://www.latimes.com/local/rss2.0.xml',
  'http://feeds.marketwatch.com/marketwatch/topstories',
  'https://www.menshealth.com/rss/all.xml',
  'https://www.nationalgeographic.com/travel/rss',
  'https://www.nbcnews.com/id/3032091/device/rss/rss.xml',
  'https://www.newsday.com/arcio/rss/category/news/?ns=prod&lc=1',
  'https://www.newsweek.com/rss',
  'https://www.npr.org/rss/rss.php?id=1001',
  'https://people.com/feed/',
  'https://www.politico.com/rss/politicopicks.xml',
  'https://www.politico.eu/feed/',
  'http://feeds.reuters.com/reuters/topNews',
  'https://feeds.skynews.com/feeds/rss/home.xml',
  'https://www.swissinfo.ch/eng/rss.xml',
  'https://techcrunch.com/feed/',
  'https://www.techradar.com/rss',
  'https://www.boston.com/rss-feeds/latest-news',
  'https://www.thedailybeast.com/feed',
  'https://www.economist.com/latest/rss.xml',
  'https://www.theguardian.com/uk/rss',
  'https://www.theguardian.com/world/rss',
  'https://www.heraldscotland.com/news/rss/',
  'https://thehill.com/feed/',
  'https://www.huffpost.com/section/front-page/feed',
  'https://www.independent.co.uk/news/uk/rss',
  'https://theintercept.com/feed/?rss',
  'https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml',
  'https://www.newyorker.com/feed/news',
  'https://www.telegraph.co.uk/news/rss.xml',
  'https://www.theverge.com/rss/index.xml',
  'https://feeds.a.dj.com/rss/RSSWorldNews.xml',
  'https://thenextweb.com/feed/',
  'https://www.thisismoney.co.uk/money/rss.xml',
  'https://time.com/feed/',
  'https://www.timeout.com/rss/all-news.xml',
  'https://rssfeeds.usatoday.com/usatoday-NewsTopStories',
  'https://www.vanguardngr.com/feed/',
  'https://www.vogue.com/feed',
  'https://www.vox.com/rss/index.xml',
  'https://www.walesonline.co.uk/rss.xml',
  'https://www.wired.com/feed/rss',
  'https://www.skysports.com/rss/12040',
  'https://www.espn.com/espn/rss/news',


];

const parser = new Parser();

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const keyword = searchParams.get('keyword')?.toLowerCase() || '';
  const sortBy = searchParams.get('sortBy') || 'publishedAt';

  try {
    // Fetch all feeds concurrently
    const feedPromises = RSS_FEEDS.map(feed => parser.parseURL(feed).catch(err => {
      console.error(`Error fetching ${feed}:`, err);
      return null;
    }));

    const feeds = await Promise.all(feedPromises);

    // Combine all articles from valid feeds
    let articles = feeds
      .filter(feed => feed !== null)
      .flatMap(feed => feed!.items.map(item => ({
        title: item.title || '',
        description: item.contentSnippet || item.content || '',
        url: item.link || '',
        publishedAt: item.pubDate || new Date().toISOString(),
        source: {
          name: feed!.title || 'Unknown Source'
        }
      })));

    // Filter by keyword if provided
    if (keyword) {
      articles = articles.filter(article =>
        article.title.toLowerCase().includes(keyword) ||
        article.description.toLowerCase().includes(keyword)
      );
    }

    // Sort articles
    articles.sort((a, b) => {
      switch (sortBy) {
        case 'publishedAt':
          return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
        case 'relevancy':
          if (!keyword) return 0;
          // Simple relevancy scoring based on keyword occurrence
          const scoreA = (a.title.toLowerCase().split(keyword).length - 1) * 2 +
                        (a.description.toLowerCase().split(keyword).length - 1);
          const scoreB = (b.title.toLowerCase().split(keyword).length - 1) * 2 +
                        (b.description.toLowerCase().split(keyword).length - 1);
          return scoreB - scoreA;
        default:
          return 0;
      }
    });

    return NextResponse.json({ articles });
  } catch (error) {
    console.error('Error processing feeds:', error);
    return NextResponse.json({ error: 'Failed to fetch news' }, { status: 500 });
  }
}