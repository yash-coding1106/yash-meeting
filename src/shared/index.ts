export const config = {
    logoCount: 5,
    firebaseConfig: {
        apiKey: "AIzaSyAyGw2dtOfZe9Q6SdkpGrq5zkeMcrhdvpE",
        authDomain: "yashmeeting-a2357.firebaseapp.com",
        databaseURL: "https://yashmeeting-a2357-default-rtdb.firebaseio.com",
        projectId: "yashmeeting-a2357",
        storageBucket: "yashmeeting-a2357.appspot.com",
        messagingSenderId: "584705925943",
        appId: "1:584705925943:web:d826c1aad36560653ab0b2",
        measurementId: "G-5RPYGGWRRM"
    },
    servers: {
        iceServers: [
            {
            urls: ['stun:stun1.l.google.com:19302',
                   'stun:stun2.l.google.com:19302'],
            },
        ],
        iceCandidatePoolSize: 10,
    },
    DEV: "development" === 'development',
}

