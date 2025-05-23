
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model MomoPayment
 * 
 */
export type MomoPayment = $Result.DefaultSelection<Prisma.$MomoPaymentPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more MomoPayments
 * const momoPayments = await prisma.momoPayment.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more MomoPayments
   * const momoPayments = await prisma.momoPayment.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.momoPayment`: Exposes CRUD operations for the **MomoPayment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MomoPayments
    * const momoPayments = await prisma.momoPayment.findMany()
    * ```
    */
  get momoPayment(): Prisma.MomoPaymentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    MomoPayment: 'MomoPayment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "momoPayment"
      txIsolationLevel: never
    }
    model: {
      MomoPayment: {
        payload: Prisma.$MomoPaymentPayload<ExtArgs>
        fields: Prisma.MomoPaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MomoPaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MomoPaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MomoPaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MomoPaymentPayload>
          }
          findFirst: {
            args: Prisma.MomoPaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MomoPaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MomoPaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MomoPaymentPayload>
          }
          findMany: {
            args: Prisma.MomoPaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MomoPaymentPayload>[]
          }
          create: {
            args: Prisma.MomoPaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MomoPaymentPayload>
          }
          createMany: {
            args: Prisma.MomoPaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MomoPaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MomoPaymentPayload>
          }
          update: {
            args: Prisma.MomoPaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MomoPaymentPayload>
          }
          deleteMany: {
            args: Prisma.MomoPaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MomoPaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MomoPaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MomoPaymentPayload>
          }
          aggregate: {
            args: Prisma.MomoPaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMomoPayment>
          }
          groupBy: {
            args: Prisma.MomoPaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<MomoPaymentGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.MomoPaymentFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.MomoPaymentAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.MomoPaymentCountArgs<ExtArgs>
            result: $Utils.Optional<MomoPaymentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    momoPayment?: MomoPaymentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model MomoPayment
   */

  export type AggregateMomoPayment = {
    _count: MomoPaymentCountAggregateOutputType | null
    _min: MomoPaymentMinAggregateOutputType | null
    _max: MomoPaymentMaxAggregateOutputType | null
  }

  export type MomoPaymentMinAggregateOutputType = {
    id: string | null
    referenceId: string | null
    externalId: string | null
    amount: string | null
    currency: string | null
    msisdn: string | null
    payerMessage: string | null
    payeeNote: string | null
    status: string | null
    code: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MomoPaymentMaxAggregateOutputType = {
    id: string | null
    referenceId: string | null
    externalId: string | null
    amount: string | null
    currency: string | null
    msisdn: string | null
    payerMessage: string | null
    payeeNote: string | null
    status: string | null
    code: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MomoPaymentCountAggregateOutputType = {
    id: number
    referenceId: number
    externalId: number
    amount: number
    currency: number
    msisdn: number
    payerMessage: number
    payeeNote: number
    status: number
    code: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MomoPaymentMinAggregateInputType = {
    id?: true
    referenceId?: true
    externalId?: true
    amount?: true
    currency?: true
    msisdn?: true
    payerMessage?: true
    payeeNote?: true
    status?: true
    code?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MomoPaymentMaxAggregateInputType = {
    id?: true
    referenceId?: true
    externalId?: true
    amount?: true
    currency?: true
    msisdn?: true
    payerMessage?: true
    payeeNote?: true
    status?: true
    code?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MomoPaymentCountAggregateInputType = {
    id?: true
    referenceId?: true
    externalId?: true
    amount?: true
    currency?: true
    msisdn?: true
    payerMessage?: true
    payeeNote?: true
    status?: true
    code?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MomoPaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MomoPayment to aggregate.
     */
    where?: MomoPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MomoPayments to fetch.
     */
    orderBy?: MomoPaymentOrderByWithRelationInput | MomoPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MomoPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MomoPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MomoPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MomoPayments
    **/
    _count?: true | MomoPaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MomoPaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MomoPaymentMaxAggregateInputType
  }

  export type GetMomoPaymentAggregateType<T extends MomoPaymentAggregateArgs> = {
        [P in keyof T & keyof AggregateMomoPayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMomoPayment[P]>
      : GetScalarType<T[P], AggregateMomoPayment[P]>
  }




  export type MomoPaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MomoPaymentWhereInput
    orderBy?: MomoPaymentOrderByWithAggregationInput | MomoPaymentOrderByWithAggregationInput[]
    by: MomoPaymentScalarFieldEnum[] | MomoPaymentScalarFieldEnum
    having?: MomoPaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MomoPaymentCountAggregateInputType | true
    _min?: MomoPaymentMinAggregateInputType
    _max?: MomoPaymentMaxAggregateInputType
  }

  export type MomoPaymentGroupByOutputType = {
    id: string
    referenceId: string
    externalId: string
    amount: string
    currency: string
    msisdn: string
    payerMessage: string
    payeeNote: string
    status: string
    code: string | null
    createdAt: Date
    updatedAt: Date
    _count: MomoPaymentCountAggregateOutputType | null
    _min: MomoPaymentMinAggregateOutputType | null
    _max: MomoPaymentMaxAggregateOutputType | null
  }

  type GetMomoPaymentGroupByPayload<T extends MomoPaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MomoPaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MomoPaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MomoPaymentGroupByOutputType[P]>
            : GetScalarType<T[P], MomoPaymentGroupByOutputType[P]>
        }
      >
    >


  export type MomoPaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    referenceId?: boolean
    externalId?: boolean
    amount?: boolean
    currency?: boolean
    msisdn?: boolean
    payerMessage?: boolean
    payeeNote?: boolean
    status?: boolean
    code?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["momoPayment"]>



  export type MomoPaymentSelectScalar = {
    id?: boolean
    referenceId?: boolean
    externalId?: boolean
    amount?: boolean
    currency?: boolean
    msisdn?: boolean
    payerMessage?: boolean
    payeeNote?: boolean
    status?: boolean
    code?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MomoPaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "referenceId" | "externalId" | "amount" | "currency" | "msisdn" | "payerMessage" | "payeeNote" | "status" | "code" | "createdAt" | "updatedAt", ExtArgs["result"]["momoPayment"]>

  export type $MomoPaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MomoPayment"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      referenceId: string
      externalId: string
      amount: string
      currency: string
      msisdn: string
      payerMessage: string
      payeeNote: string
      status: string
      code: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["momoPayment"]>
    composites: {}
  }

  type MomoPaymentGetPayload<S extends boolean | null | undefined | MomoPaymentDefaultArgs> = $Result.GetResult<Prisma.$MomoPaymentPayload, S>

  type MomoPaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MomoPaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MomoPaymentCountAggregateInputType | true
    }

  export interface MomoPaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MomoPayment'], meta: { name: 'MomoPayment' } }
    /**
     * Find zero or one MomoPayment that matches the filter.
     * @param {MomoPaymentFindUniqueArgs} args - Arguments to find a MomoPayment
     * @example
     * // Get one MomoPayment
     * const momoPayment = await prisma.momoPayment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MomoPaymentFindUniqueArgs>(args: SelectSubset<T, MomoPaymentFindUniqueArgs<ExtArgs>>): Prisma__MomoPaymentClient<$Result.GetResult<Prisma.$MomoPaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MomoPayment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MomoPaymentFindUniqueOrThrowArgs} args - Arguments to find a MomoPayment
     * @example
     * // Get one MomoPayment
     * const momoPayment = await prisma.momoPayment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MomoPaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, MomoPaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MomoPaymentClient<$Result.GetResult<Prisma.$MomoPaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MomoPayment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MomoPaymentFindFirstArgs} args - Arguments to find a MomoPayment
     * @example
     * // Get one MomoPayment
     * const momoPayment = await prisma.momoPayment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MomoPaymentFindFirstArgs>(args?: SelectSubset<T, MomoPaymentFindFirstArgs<ExtArgs>>): Prisma__MomoPaymentClient<$Result.GetResult<Prisma.$MomoPaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MomoPayment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MomoPaymentFindFirstOrThrowArgs} args - Arguments to find a MomoPayment
     * @example
     * // Get one MomoPayment
     * const momoPayment = await prisma.momoPayment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MomoPaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, MomoPaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__MomoPaymentClient<$Result.GetResult<Prisma.$MomoPaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MomoPayments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MomoPaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MomoPayments
     * const momoPayments = await prisma.momoPayment.findMany()
     * 
     * // Get first 10 MomoPayments
     * const momoPayments = await prisma.momoPayment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const momoPaymentWithIdOnly = await prisma.momoPayment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MomoPaymentFindManyArgs>(args?: SelectSubset<T, MomoPaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MomoPaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MomoPayment.
     * @param {MomoPaymentCreateArgs} args - Arguments to create a MomoPayment.
     * @example
     * // Create one MomoPayment
     * const MomoPayment = await prisma.momoPayment.create({
     *   data: {
     *     // ... data to create a MomoPayment
     *   }
     * })
     * 
     */
    create<T extends MomoPaymentCreateArgs>(args: SelectSubset<T, MomoPaymentCreateArgs<ExtArgs>>): Prisma__MomoPaymentClient<$Result.GetResult<Prisma.$MomoPaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MomoPayments.
     * @param {MomoPaymentCreateManyArgs} args - Arguments to create many MomoPayments.
     * @example
     * // Create many MomoPayments
     * const momoPayment = await prisma.momoPayment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MomoPaymentCreateManyArgs>(args?: SelectSubset<T, MomoPaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MomoPayment.
     * @param {MomoPaymentDeleteArgs} args - Arguments to delete one MomoPayment.
     * @example
     * // Delete one MomoPayment
     * const MomoPayment = await prisma.momoPayment.delete({
     *   where: {
     *     // ... filter to delete one MomoPayment
     *   }
     * })
     * 
     */
    delete<T extends MomoPaymentDeleteArgs>(args: SelectSubset<T, MomoPaymentDeleteArgs<ExtArgs>>): Prisma__MomoPaymentClient<$Result.GetResult<Prisma.$MomoPaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MomoPayment.
     * @param {MomoPaymentUpdateArgs} args - Arguments to update one MomoPayment.
     * @example
     * // Update one MomoPayment
     * const momoPayment = await prisma.momoPayment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MomoPaymentUpdateArgs>(args: SelectSubset<T, MomoPaymentUpdateArgs<ExtArgs>>): Prisma__MomoPaymentClient<$Result.GetResult<Prisma.$MomoPaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MomoPayments.
     * @param {MomoPaymentDeleteManyArgs} args - Arguments to filter MomoPayments to delete.
     * @example
     * // Delete a few MomoPayments
     * const { count } = await prisma.momoPayment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MomoPaymentDeleteManyArgs>(args?: SelectSubset<T, MomoPaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MomoPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MomoPaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MomoPayments
     * const momoPayment = await prisma.momoPayment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MomoPaymentUpdateManyArgs>(args: SelectSubset<T, MomoPaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MomoPayment.
     * @param {MomoPaymentUpsertArgs} args - Arguments to update or create a MomoPayment.
     * @example
     * // Update or create a MomoPayment
     * const momoPayment = await prisma.momoPayment.upsert({
     *   create: {
     *     // ... data to create a MomoPayment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MomoPayment we want to update
     *   }
     * })
     */
    upsert<T extends MomoPaymentUpsertArgs>(args: SelectSubset<T, MomoPaymentUpsertArgs<ExtArgs>>): Prisma__MomoPaymentClient<$Result.GetResult<Prisma.$MomoPaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MomoPayments that matches the filter.
     * @param {MomoPaymentFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const momoPayment = await prisma.momoPayment.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: MomoPaymentFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a MomoPayment.
     * @param {MomoPaymentAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const momoPayment = await prisma.momoPayment.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: MomoPaymentAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of MomoPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MomoPaymentCountArgs} args - Arguments to filter MomoPayments to count.
     * @example
     * // Count the number of MomoPayments
     * const count = await prisma.momoPayment.count({
     *   where: {
     *     // ... the filter for the MomoPayments we want to count
     *   }
     * })
    **/
    count<T extends MomoPaymentCountArgs>(
      args?: Subset<T, MomoPaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MomoPaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MomoPayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MomoPaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MomoPaymentAggregateArgs>(args: Subset<T, MomoPaymentAggregateArgs>): Prisma.PrismaPromise<GetMomoPaymentAggregateType<T>>

    /**
     * Group by MomoPayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MomoPaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MomoPaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MomoPaymentGroupByArgs['orderBy'] }
        : { orderBy?: MomoPaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MomoPaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMomoPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MomoPayment model
   */
  readonly fields: MomoPaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MomoPayment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MomoPaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MomoPayment model
   */
  interface MomoPaymentFieldRefs {
    readonly id: FieldRef<"MomoPayment", 'String'>
    readonly referenceId: FieldRef<"MomoPayment", 'String'>
    readonly externalId: FieldRef<"MomoPayment", 'String'>
    readonly amount: FieldRef<"MomoPayment", 'String'>
    readonly currency: FieldRef<"MomoPayment", 'String'>
    readonly msisdn: FieldRef<"MomoPayment", 'String'>
    readonly payerMessage: FieldRef<"MomoPayment", 'String'>
    readonly payeeNote: FieldRef<"MomoPayment", 'String'>
    readonly status: FieldRef<"MomoPayment", 'String'>
    readonly code: FieldRef<"MomoPayment", 'String'>
    readonly createdAt: FieldRef<"MomoPayment", 'DateTime'>
    readonly updatedAt: FieldRef<"MomoPayment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MomoPayment findUnique
   */
  export type MomoPaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MomoPayment
     */
    select?: MomoPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MomoPayment
     */
    omit?: MomoPaymentOmit<ExtArgs> | null
    /**
     * Filter, which MomoPayment to fetch.
     */
    where: MomoPaymentWhereUniqueInput
  }

  /**
   * MomoPayment findUniqueOrThrow
   */
  export type MomoPaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MomoPayment
     */
    select?: MomoPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MomoPayment
     */
    omit?: MomoPaymentOmit<ExtArgs> | null
    /**
     * Filter, which MomoPayment to fetch.
     */
    where: MomoPaymentWhereUniqueInput
  }

  /**
   * MomoPayment findFirst
   */
  export type MomoPaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MomoPayment
     */
    select?: MomoPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MomoPayment
     */
    omit?: MomoPaymentOmit<ExtArgs> | null
    /**
     * Filter, which MomoPayment to fetch.
     */
    where?: MomoPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MomoPayments to fetch.
     */
    orderBy?: MomoPaymentOrderByWithRelationInput | MomoPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MomoPayments.
     */
    cursor?: MomoPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MomoPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MomoPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MomoPayments.
     */
    distinct?: MomoPaymentScalarFieldEnum | MomoPaymentScalarFieldEnum[]
  }

  /**
   * MomoPayment findFirstOrThrow
   */
  export type MomoPaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MomoPayment
     */
    select?: MomoPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MomoPayment
     */
    omit?: MomoPaymentOmit<ExtArgs> | null
    /**
     * Filter, which MomoPayment to fetch.
     */
    where?: MomoPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MomoPayments to fetch.
     */
    orderBy?: MomoPaymentOrderByWithRelationInput | MomoPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MomoPayments.
     */
    cursor?: MomoPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MomoPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MomoPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MomoPayments.
     */
    distinct?: MomoPaymentScalarFieldEnum | MomoPaymentScalarFieldEnum[]
  }

  /**
   * MomoPayment findMany
   */
  export type MomoPaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MomoPayment
     */
    select?: MomoPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MomoPayment
     */
    omit?: MomoPaymentOmit<ExtArgs> | null
    /**
     * Filter, which MomoPayments to fetch.
     */
    where?: MomoPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MomoPayments to fetch.
     */
    orderBy?: MomoPaymentOrderByWithRelationInput | MomoPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MomoPayments.
     */
    cursor?: MomoPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MomoPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MomoPayments.
     */
    skip?: number
    distinct?: MomoPaymentScalarFieldEnum | MomoPaymentScalarFieldEnum[]
  }

  /**
   * MomoPayment create
   */
  export type MomoPaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MomoPayment
     */
    select?: MomoPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MomoPayment
     */
    omit?: MomoPaymentOmit<ExtArgs> | null
    /**
     * The data needed to create a MomoPayment.
     */
    data: XOR<MomoPaymentCreateInput, MomoPaymentUncheckedCreateInput>
  }

  /**
   * MomoPayment createMany
   */
  export type MomoPaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MomoPayments.
     */
    data: MomoPaymentCreateManyInput | MomoPaymentCreateManyInput[]
  }

  /**
   * MomoPayment update
   */
  export type MomoPaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MomoPayment
     */
    select?: MomoPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MomoPayment
     */
    omit?: MomoPaymentOmit<ExtArgs> | null
    /**
     * The data needed to update a MomoPayment.
     */
    data: XOR<MomoPaymentUpdateInput, MomoPaymentUncheckedUpdateInput>
    /**
     * Choose, which MomoPayment to update.
     */
    where: MomoPaymentWhereUniqueInput
  }

  /**
   * MomoPayment updateMany
   */
  export type MomoPaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MomoPayments.
     */
    data: XOR<MomoPaymentUpdateManyMutationInput, MomoPaymentUncheckedUpdateManyInput>
    /**
     * Filter which MomoPayments to update
     */
    where?: MomoPaymentWhereInput
    /**
     * Limit how many MomoPayments to update.
     */
    limit?: number
  }

  /**
   * MomoPayment upsert
   */
  export type MomoPaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MomoPayment
     */
    select?: MomoPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MomoPayment
     */
    omit?: MomoPaymentOmit<ExtArgs> | null
    /**
     * The filter to search for the MomoPayment to update in case it exists.
     */
    where: MomoPaymentWhereUniqueInput
    /**
     * In case the MomoPayment found by the `where` argument doesn't exist, create a new MomoPayment with this data.
     */
    create: XOR<MomoPaymentCreateInput, MomoPaymentUncheckedCreateInput>
    /**
     * In case the MomoPayment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MomoPaymentUpdateInput, MomoPaymentUncheckedUpdateInput>
  }

  /**
   * MomoPayment delete
   */
  export type MomoPaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MomoPayment
     */
    select?: MomoPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MomoPayment
     */
    omit?: MomoPaymentOmit<ExtArgs> | null
    /**
     * Filter which MomoPayment to delete.
     */
    where: MomoPaymentWhereUniqueInput
  }

  /**
   * MomoPayment deleteMany
   */
  export type MomoPaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MomoPayments to delete
     */
    where?: MomoPaymentWhereInput
    /**
     * Limit how many MomoPayments to delete.
     */
    limit?: number
  }

  /**
   * MomoPayment findRaw
   */
  export type MomoPaymentFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * MomoPayment aggregateRaw
   */
  export type MomoPaymentAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * MomoPayment without action
   */
  export type MomoPaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MomoPayment
     */
    select?: MomoPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MomoPayment
     */
    omit?: MomoPaymentOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const MomoPaymentScalarFieldEnum: {
    id: 'id',
    referenceId: 'referenceId',
    externalId: 'externalId',
    amount: 'amount',
    currency: 'currency',
    msisdn: 'msisdn',
    payerMessage: 'payerMessage',
    payeeNote: 'payeeNote',
    status: 'status',
    code: 'code',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MomoPaymentScalarFieldEnum = (typeof MomoPaymentScalarFieldEnum)[keyof typeof MomoPaymentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type MomoPaymentWhereInput = {
    AND?: MomoPaymentWhereInput | MomoPaymentWhereInput[]
    OR?: MomoPaymentWhereInput[]
    NOT?: MomoPaymentWhereInput | MomoPaymentWhereInput[]
    id?: StringFilter<"MomoPayment"> | string
    referenceId?: StringFilter<"MomoPayment"> | string
    externalId?: StringFilter<"MomoPayment"> | string
    amount?: StringFilter<"MomoPayment"> | string
    currency?: StringFilter<"MomoPayment"> | string
    msisdn?: StringFilter<"MomoPayment"> | string
    payerMessage?: StringFilter<"MomoPayment"> | string
    payeeNote?: StringFilter<"MomoPayment"> | string
    status?: StringFilter<"MomoPayment"> | string
    code?: StringNullableFilter<"MomoPayment"> | string | null
    createdAt?: DateTimeFilter<"MomoPayment"> | Date | string
    updatedAt?: DateTimeFilter<"MomoPayment"> | Date | string
  }

  export type MomoPaymentOrderByWithRelationInput = {
    id?: SortOrder
    referenceId?: SortOrder
    externalId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    msisdn?: SortOrder
    payerMessage?: SortOrder
    payeeNote?: SortOrder
    status?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MomoPaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    referenceId?: string
    AND?: MomoPaymentWhereInput | MomoPaymentWhereInput[]
    OR?: MomoPaymentWhereInput[]
    NOT?: MomoPaymentWhereInput | MomoPaymentWhereInput[]
    externalId?: StringFilter<"MomoPayment"> | string
    amount?: StringFilter<"MomoPayment"> | string
    currency?: StringFilter<"MomoPayment"> | string
    msisdn?: StringFilter<"MomoPayment"> | string
    payerMessage?: StringFilter<"MomoPayment"> | string
    payeeNote?: StringFilter<"MomoPayment"> | string
    status?: StringFilter<"MomoPayment"> | string
    code?: StringNullableFilter<"MomoPayment"> | string | null
    createdAt?: DateTimeFilter<"MomoPayment"> | Date | string
    updatedAt?: DateTimeFilter<"MomoPayment"> | Date | string
  }, "id" | "referenceId">

  export type MomoPaymentOrderByWithAggregationInput = {
    id?: SortOrder
    referenceId?: SortOrder
    externalId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    msisdn?: SortOrder
    payerMessage?: SortOrder
    payeeNote?: SortOrder
    status?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MomoPaymentCountOrderByAggregateInput
    _max?: MomoPaymentMaxOrderByAggregateInput
    _min?: MomoPaymentMinOrderByAggregateInput
  }

  export type MomoPaymentScalarWhereWithAggregatesInput = {
    AND?: MomoPaymentScalarWhereWithAggregatesInput | MomoPaymentScalarWhereWithAggregatesInput[]
    OR?: MomoPaymentScalarWhereWithAggregatesInput[]
    NOT?: MomoPaymentScalarWhereWithAggregatesInput | MomoPaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MomoPayment"> | string
    referenceId?: StringWithAggregatesFilter<"MomoPayment"> | string
    externalId?: StringWithAggregatesFilter<"MomoPayment"> | string
    amount?: StringWithAggregatesFilter<"MomoPayment"> | string
    currency?: StringWithAggregatesFilter<"MomoPayment"> | string
    msisdn?: StringWithAggregatesFilter<"MomoPayment"> | string
    payerMessage?: StringWithAggregatesFilter<"MomoPayment"> | string
    payeeNote?: StringWithAggregatesFilter<"MomoPayment"> | string
    status?: StringWithAggregatesFilter<"MomoPayment"> | string
    code?: StringNullableWithAggregatesFilter<"MomoPayment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MomoPayment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MomoPayment"> | Date | string
  }

  export type MomoPaymentCreateInput = {
    id?: string
    referenceId: string
    externalId: string
    amount: string
    currency: string
    msisdn: string
    payerMessage: string
    payeeNote: string
    status?: string
    code?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MomoPaymentUncheckedCreateInput = {
    id?: string
    referenceId: string
    externalId: string
    amount: string
    currency: string
    msisdn: string
    payerMessage: string
    payeeNote: string
    status?: string
    code?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MomoPaymentUpdateInput = {
    referenceId?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    msisdn?: StringFieldUpdateOperationsInput | string
    payerMessage?: StringFieldUpdateOperationsInput | string
    payeeNote?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MomoPaymentUncheckedUpdateInput = {
    referenceId?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    msisdn?: StringFieldUpdateOperationsInput | string
    payerMessage?: StringFieldUpdateOperationsInput | string
    payeeNote?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MomoPaymentCreateManyInput = {
    id?: string
    referenceId: string
    externalId: string
    amount: string
    currency: string
    msisdn: string
    payerMessage: string
    payeeNote: string
    status?: string
    code?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MomoPaymentUpdateManyMutationInput = {
    referenceId?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    msisdn?: StringFieldUpdateOperationsInput | string
    payerMessage?: StringFieldUpdateOperationsInput | string
    payeeNote?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MomoPaymentUncheckedUpdateManyInput = {
    referenceId?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    msisdn?: StringFieldUpdateOperationsInput | string
    payerMessage?: StringFieldUpdateOperationsInput | string
    payeeNote?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MomoPaymentCountOrderByAggregateInput = {
    id?: SortOrder
    referenceId?: SortOrder
    externalId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    msisdn?: SortOrder
    payerMessage?: SortOrder
    payeeNote?: SortOrder
    status?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MomoPaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    referenceId?: SortOrder
    externalId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    msisdn?: SortOrder
    payerMessage?: SortOrder
    payeeNote?: SortOrder
    status?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MomoPaymentMinOrderByAggregateInput = {
    id?: SortOrder
    referenceId?: SortOrder
    externalId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    msisdn?: SortOrder
    payerMessage?: SortOrder
    payeeNote?: SortOrder
    status?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}