const post = [
    {
        id: 1,
        author: "Anya Forger",
        body: "Lorem ipsum dolor ismaet",
        comments: [
            {
                id: 1,
                author: "mayo nice",
                text: "hola",
                children: [
                    {
                        id: 5,
                        author: "carbo high rates",
                        text: "what's up",
                        children: [
                            {
                                id: 6,
                                author: "ain't hacker but IT",
                                text: "what's down",
                                children: [],
                                upvoteCount: 4,
                                replyCount: 0,
                            },
                        ],
                        upvoteCount: 2,
                        replyCount: 1,
                    },
                ],
                upvoteCount: 0,
                replyCount: 0,
            },
        ],
    },
    {
        id: 2,
        author: "Philip is crew",
        comments: [
            {
                id: 2,
                author: "mayo not nice",
                text: "ochinchin",
                children: [],
                upvoteCount: 0,
                replyCount: 0,
            },
        ],
    },
    {
        id: 3,
        author: "Anya Forger",
        comments: [
            {
                id: 3,
                author: "tanjiro",
                text: "ohayo",
                children: [
                    {
                        id: 4,
                        author: "momonosuke",
                        text: "baka sanjuro",
                        children: [],
                        upvoteCount: 0,
                        replyCount: 0,
                    },
                    {
                        id: 7,
                        author: "zenitsu",
                        text: "where are the girls at??",
                        children: [],
                        upvoteCount: 0,
                        replyCount: 0,
                    },
                ],
                upvoteCount: 0,
                replyCount: 2,
            },
        ],
    },
];

export default post;
