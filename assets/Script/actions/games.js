import Utils from '../util/api'
import config from '../Config'

let _server_path = config.DEBUG ? config.TEST_SERVER_PATH : config.SERVER_PATH
let api = Utils.Utils

let authLogin = () => {
        console.log(Utils)
        api.get({
            root: _server_path,
            url: '/ttapp/api/user/openid/auth/',
            data: {
                check: true,
                ajax: true
            },
            success: ({ data }) => {
                config.ttsid = data.ttsid
                window.ttsid = data.ttsid
            }
        })
    }
    // /ttraffle/api/raffle/list/
let pkData = () => {
    console.log(11222)
    api.get({
        root: _server_path,
        // url: 'http://qzone.ttnbalite.com/ttapp/api/task/list/daily/?openid=C2511CF6DB8A5D63B02F4A0A84A6CD6F&openkey=7EBD184ECC233438598593805762D261&ttsid=6fd312a948364773b9a295c933874f75',
        url: '/ttapp/api/task/list/daily/',
        data: {
            check: true,
            ajax: true
        },
        success: ({ data }) => {
            console.log(data)
        }
    })
}
let raffle = () => {
    console.log(11222)
    api.get({
        root: _server_path,
        // url: 'http://qzone.ttnbalite.com/ttapp/api/task/list/daily/?openid=C2511CF6DB8A5D63B02F4A0A84A6CD6F&openkey=7EBD184ECC233438598593805762D261&ttsid=6fd312a948364773b9a295c933874f75',
        url: '/ttraffle/api/raffle/list/',
        data: {
            check: true,
            ajax: true
        },
        success: ({ data }) => {
            config.ttsid = data.ttsid
            window.ttsid = data.ttsid
        }
    })
}
let startPk = () => {
        console.log('pk11223333')
        api.get({
            root: _server_path,
            url: '/ttraffle/api/pk/user/pk/',
            data: {
                'user_id': '17',
                'competitor_id': '17',
                'type': '1'
            },
            //     check: true,
            //     ajax: true
            // },
            success: ({ data }) => {
                // config.ttsid = data.ttsid
                // window.ttsid = data.ttsid
            }
        })
    }
    // let startPka = () => {
    //     console.log('pk11223333')
    //     let opt = {'user_id':'17','competitor_id':'17','type':'1'}
    //         api.get({
    //           root: _server_path,
    //           url:  '/ttraffle/api/pk/user/pk/',
    //           data: opt,
    //           success: ({ data }) => {
    //             console.log(data)
    //           },
    //           error: ({ reason }) => {
    //             console.log(reason)
    //           }
    //         })
    //       }

export {
    authLogin,
    pkData,
    raffle,
    startPk
}