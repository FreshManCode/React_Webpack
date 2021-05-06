export async function two() {
    for (var index = 0; index < 100; index++) {
        console.log('asyc1 index is:', index)
    }
    console.log('22222')
    console.log('33333')
    for (var index = 0; index < 100; index++) {
        console.log('asyc2 index is:', index)
    }
    console.log('4444')
    
}
export function one() {
    for (var index = 0; index < 1000; index++) {
        console.log('index is:', index)
    }
}

