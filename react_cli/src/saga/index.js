import { put, all,fork,takeEvery } from 'redux-saga/effects';
import { delay } from 'redux-saga';

export function* fetchUser() {
    console.log('fetchUser');
    yield delay(1000);
    yield put({ type: 'GET_USER' })
}

export function* fetchProject() {
    console.log('fetchProject');
    yield delay(1000);
    yield put({ type: 'GET_PROJECT' })
}

export default function* rootSaga() {
    // yield all([
    //     fetchUser,
    //     fetchProject
    // ]);
    // yield fork(fetchUser)
    // yield fork(fetchProject)
    // 添加异步的观察通知,当有 'TEST_FETECHUSER'Type 发送时会调用fetchUser saga函数
    yield takeEvery('TEST_FETECHUSER',fetchUser)
}