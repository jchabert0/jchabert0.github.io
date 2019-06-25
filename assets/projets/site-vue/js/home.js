var home = new Vue({
    el: '#home',
    data: {
        message: 'work in progress',
        title: 'Jérémie CHABERT',
        subtitle: 'Développeur front-end',
        circles: [
            { style: 'height: 200px; width: 200px; left: 10px; bottom: 65px; animation-duration: 5s' },
            { style: 'height: 100px; width: 100px; left: 200px; bottom: 230px; animation-duration: 4s' },
            { style: 'height: 50px; width: 50px; left: 170px; bottom: 290px; animation-duration: 3s' },
            { style: 'height: 50px; width: 50px; left: 250px; bottom: 150px; animation-duration: 4s' },
            { style: 'height: 50px; width: 50px; left: 50px; bottom: 480px; animation-duration: 2s' },
            { style: 'height: 20px; width: 20px; left: 100px; bottom: 400px; animation-duration: 5s' },
            { style: 'height: 30px; width: 30px; left: 280px; bottom: 440px; animation-duration: 3s' },
        ]
    }
});
