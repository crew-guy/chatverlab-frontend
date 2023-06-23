export const archiObj = {
  data: {
    introduction: "This project is focused on optimizing speed and storage cost for a video platform that hosts short cat singing videos.",
    layers: [
      {
        key_features: [
          {
            explanation: "The videos will be in 720p resolution.",
            feature: "Video Resolution",
            sourceDocuments: []
          },
          {
            explanation: "The videos will be 20 seconds in duration.",
            feature: "Video Duration",
            sourceDocuments: []
          }
        ],
        purpose: "To define the technical specifications for the videos hosted on the platform.",
        services: [],
        title: "Video Specifications"
      },
      {
        key_features: [
          {
            explanation: "The platform will be hosted in India and USA.",
            feature: "Preferred Hosting Regions",
            sourceDocuments: []
          },
          {
            explanation: "The peak hours for the platform will be 9 pm IST and ET.",
            feature: "Peak Hours",
            sourceDocuments: []
          }
        ],
        purpose: "To define the preferred hosting regions and peak hours for the platform.",
        services: [
          "Amazon Web Services (AWS)",
          "Google Cloud Platform (GCP)"
        ],
        title: "Hosting"
      },
      {
        key_features: [
          {
            explanation: "The platform will focus on speed and storage cost optimization.",
            feature: "Focus",
            sourceDocuments: []
          }
        ],
        purpose: "To optimize the platform for speed and storage cost.",
        services: [],
        title: "Optimization"
      }
    ],
    title: "Video Platform for Short Cat Singing Videos"
  },
  source_docs: [
    {
      excerpt: "Resolution Maximum Bitrate QVBR Quality Level 2160p 15,000 Kbps 9 1080p 8,500 Kbps 8 720p 6,000 Kbps 8 540p 3,500 Kbps 7 360p 1,500 Kbps 7 270p 400 Kbps 7 You can also modify the solution to use different QVBR settings, other system job templates, or your own custom job templates. For more information about working with job templates for MediaConvert, refer to Working with MediaConvert Job Templates. For more information about QVBR Mode, refer to Using the QVBR Rate Control Mode. If you set the solution to ingest source videos and metadata files, you can specify the template using the JobTemplate field in your metadata file.",
      source: "https://docs.aws.amazon.com/pdfs/solutions/latest/video-on-demand/video-on-demand.pdf",
      title: "video-on-demand"
    },
    {
      excerpt: "With these optimizations, the platform can deliver video with less than five seconds of latency, providing the audience with a near real-time experience. Live stream resolution is set for 1080p at 60 frames per second (FPS), but specifications automatically adjust based on the user’s internet connection speed or device limitations, maintaining low latency regardless of network strength. During live streams, Kooky offers interactive features that enhance the user experience and audience engagement, such as real-time chat using Amazon IVS Stream Chat, live voting, and an audience Q&A using the stream’s timed metadata API. “With Amazon IVS in place and settings optimized, we’ve seen platform performance improve notably, alongside audience participation and user satisfaction, resulting in a 38% retention increase.",
      source: "https://aws.amazon.com/blogs/media/smileshark-helps-k-pop-fans-keep-singing-with-live-streaming-on-amazon-ivs/",
      title: "SmileShark helps K-pop fans keep singing with live streaming on Amazon IVS | AWS for M&E Blog"
    },
    {
      excerpt: "AM – 1:00 PM Timing 3: 2:00 PM – 5:00 PM India & Sri Lanka India GMT+5.30 (IST) Timing 1: 6:00 AM – 9:00 AM Timing 2: 10:30 AM – 1:30 PM Timing 3: 2:30 PM – 5:30 PM Sri Lanka GMT+5.30 (SLST) Timing 1: 6:00 AM – 9:00 AM Timing 2: 10:30 AM – 1:30 PM Timing 3: 2:30 PM – 5:30 PM Korea Korea GMT+9 (KST) Timing 1: 9:30 AM – 12:30 PM Timing 2: 2:00 PM – 5:00 PM Timing 3: 6:00 PM – 9:00 PM",
      source: "https://aws.amazon.com/events/awsome-day/awsome-day-online/",
      title: "AWSome Day Online Conference"
    },
    {
      excerpt: "HLS outputs AVC 720p through 270p By default, the solution is configured to leverage Quality-Defined Variable Bitrate (QVBR) mode in MediaConvert. The QVBR settings are configured to the recommended values for each output, as shown in the following table. Resolution Maximum Bitrate QVBR Quality Level 2160p 15,000 Kbps 9 1080p 8,500 Kbps 8 720p 6,000 Kbps 8 540p 3,500 Kbps 7 360p 1,500 Kbps 7 270p 400 Kbps 7 You can also modify the solution to use different QVBR settings, other system job templates, or your own custom job templates",
      source: "https://docs.aws.amazon.com/pdfs/solutions/latest/video-on-demand/video-on-demand.pdf",
      title: "video-on-demand"
    },
    {
      excerpt: "October 12, 2016 – 6 to 7 PM. October 27, 2016 – 1:30 to 2:30 PM. Deep Dive on AWS re:Invent 2016 Breakout Sessions – Each of the tracks that I mentioned above will contain sessions at the introductory, advanced, and expert levels. This webinar will help you to learn more about the tracks and the sessions so that you can start to prepare your schedule. Again, the sessions, with times in PT: October 17, 2016 – 9 to 10 AM. October 17, 2016 – 6 to 7 PM",
      source: "https://aws.amazon.com/blogs/aws/category/webinars/page/2/",
      title: "Webinars | AWS Blog"
    },
    {
      excerpt: "For example, do you want to optimize for video quality or storage and bandwidth costs? In some cases, it’s best to optimize for quality—getting valuable content to viewers in the highest possible resolution—rather than storage and delivery cost. Knowing your content value will guide design decisions and help you select reliability targets, content protection schemes, and performance objectives. You can always adjust your focus between the pillar areas, but a shared understanding of the content value will help your organization align on design objectives and make tradeoff decisions",
      source: "https://docs.aws.amazon.com/pdfs/wellarchitected/latest/streaming-media-lens/wellarchitected-streaming-media-lens.pdf",
      title: "wellarchitected-streaming-media-lens"
    }
  ]
}
