export interface Contents {
    video:{
      videoId:string;
      thumbnails:thumbProps[]
      publishedTimeText:string;
    title:string;
    stats:{
      views:number;
    }
    author:{
      channelId:string;
      title:string;
      channelTitle:string;
      avatar:any;
    };
  }
  }
  type thumbProps ={ height:number, url:string, width:number}

  