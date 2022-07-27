export default function handler(req, res) {
    if(req.method === 'GET' ){
        res.status(200).json([{"name":"Giri","id":"1"},{"name":"Denmark","id":"2"},{"name":"Democratic People's Republic of Korea","id":"3"},{"name":"Philippines","id":"4"},{"name":"Cote d'Ivoire","id":"5"},{"name":"Nicaragua","id":"6"},{"name":"Burkina Faso","id":"7"},{"name":"Algeria","id":"8"},{"name":"Madagascar","id":"9"},{"name":"American Samoa","id":"10"},{"name":"Mali","id":"11"}])
    }
}