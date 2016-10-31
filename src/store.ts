import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/of";
import "rxjs/add/observable/merge";
import "rxjs/add/observable/empty";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/map";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/startWith";
import "rxjs/add/operator/observeOn";
import "rxjs/add/operator/subscribeOn";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/timeout";
import * as deepEqual from "deep-equal";
import {
  reassign, reassignif,
  actionCreator, TypedActionDescription, EmptyActionDescription,
  reducerFromActions, Reducer, StateUpdate,
  createStore, Store, StoreMiddleware,
  withEffects, defineStore, ICreateStoreOptions, logUpdates,
  tunnelActions, extendWithActions, extendWith, Action,
} from "rxstore";

/* MODELS */

export interface NotificationsState {
  // status: NotificationsStatusModel;
  // message: string;
  // data: any;
  // notifications: NotificationPayload[];
};

export enum NotificationsStatusModel {
  Error = 0,
  Info = 1,
  Pending = 2,
};

export interface NotificationPayload {
  status: NotificationsStatusModel;
  id: string;
  message: string;
  data: any;
};

/* ACTIONS */

export interface NotificationsEvents { }

const newEvent = actionCreator<NotificationsState>("MantTest.Notifications/");

export const NotificationsActions = {
  notification: newEvent.of<NotificationPayload>("NOTIFICATION"),
};

/* STORE */

const NotificationReducer = reducerFromActions(NotificationsActions);

export type NotificationsStore = Store<NotificationsState> & NotificationsEvents;

export const defaultNotificationsState = (): NotificationsState => ({
  // notifications: [],
});

export const createNotificationsStore = () => defineStore<NotificationsState, NotificationsStore>(
  NotificationReducer,
  defaultNotificationsState(),
  extendWithActions(NotificationsActions),
);
