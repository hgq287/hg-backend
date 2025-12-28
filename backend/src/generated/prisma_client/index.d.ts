
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model OAuthClient
 * 
 */
export type OAuthClient = $Result.DefaultSelection<Prisma.$OAuthClientPayload>
/**
 * Model OAuthAuthorizationCode
 * 
 */
export type OAuthAuthorizationCode = $Result.DefaultSelection<Prisma.$OAuthAuthorizationCodePayload>
/**
 * Model OAuthAccessToken
 * 
 */
export type OAuthAccessToken = $Result.DefaultSelection<Prisma.$OAuthAccessTokenPayload>
/**
 * Model OAuthRefreshToken
 * 
 */
export type OAuthRefreshToken = $Result.DefaultSelection<Prisma.$OAuthRefreshTokenPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.oAuthClient`: Exposes CRUD operations for the **OAuthClient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OAuthClients
    * const oAuthClients = await prisma.oAuthClient.findMany()
    * ```
    */
  get oAuthClient(): Prisma.OAuthClientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.oAuthAuthorizationCode`: Exposes CRUD operations for the **OAuthAuthorizationCode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OAuthAuthorizationCodes
    * const oAuthAuthorizationCodes = await prisma.oAuthAuthorizationCode.findMany()
    * ```
    */
  get oAuthAuthorizationCode(): Prisma.OAuthAuthorizationCodeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.oAuthAccessToken`: Exposes CRUD operations for the **OAuthAccessToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OAuthAccessTokens
    * const oAuthAccessTokens = await prisma.oAuthAccessToken.findMany()
    * ```
    */
  get oAuthAccessToken(): Prisma.OAuthAccessTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.oAuthRefreshToken`: Exposes CRUD operations for the **OAuthRefreshToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OAuthRefreshTokens
    * const oAuthRefreshTokens = await prisma.oAuthRefreshToken.findMany()
    * ```
    */
  get oAuthRefreshToken(): Prisma.OAuthRefreshTokenDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.1
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    User: 'User',
    Post: 'Post',
    OAuthClient: 'OAuthClient',
    OAuthAuthorizationCode: 'OAuthAuthorizationCode',
    OAuthAccessToken: 'OAuthAccessToken',
    OAuthRefreshToken: 'OAuthRefreshToken'
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
      modelProps: "user" | "post" | "oAuthClient" | "oAuthAuthorizationCode" | "oAuthAccessToken" | "oAuthRefreshToken"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      OAuthClient: {
        payload: Prisma.$OAuthClientPayload<ExtArgs>
        fields: Prisma.OAuthClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OAuthClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OAuthClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthClientPayload>
          }
          findFirst: {
            args: Prisma.OAuthClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OAuthClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthClientPayload>
          }
          findMany: {
            args: Prisma.OAuthClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthClientPayload>[]
          }
          create: {
            args: Prisma.OAuthClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthClientPayload>
          }
          createMany: {
            args: Prisma.OAuthClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OAuthClientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthClientPayload>[]
          }
          delete: {
            args: Prisma.OAuthClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthClientPayload>
          }
          update: {
            args: Prisma.OAuthClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthClientPayload>
          }
          deleteMany: {
            args: Prisma.OAuthClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OAuthClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OAuthClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthClientPayload>
          }
          aggregate: {
            args: Prisma.OAuthClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOAuthClient>
          }
          groupBy: {
            args: Prisma.OAuthClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<OAuthClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.OAuthClientCountArgs<ExtArgs>
            result: $Utils.Optional<OAuthClientCountAggregateOutputType> | number
          }
        }
      }
      OAuthAuthorizationCode: {
        payload: Prisma.$OAuthAuthorizationCodePayload<ExtArgs>
        fields: Prisma.OAuthAuthorizationCodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OAuthAuthorizationCodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthAuthorizationCodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OAuthAuthorizationCodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthAuthorizationCodePayload>
          }
          findFirst: {
            args: Prisma.OAuthAuthorizationCodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthAuthorizationCodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OAuthAuthorizationCodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthAuthorizationCodePayload>
          }
          findMany: {
            args: Prisma.OAuthAuthorizationCodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthAuthorizationCodePayload>[]
          }
          create: {
            args: Prisma.OAuthAuthorizationCodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthAuthorizationCodePayload>
          }
          createMany: {
            args: Prisma.OAuthAuthorizationCodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OAuthAuthorizationCodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthAuthorizationCodePayload>[]
          }
          delete: {
            args: Prisma.OAuthAuthorizationCodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthAuthorizationCodePayload>
          }
          update: {
            args: Prisma.OAuthAuthorizationCodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthAuthorizationCodePayload>
          }
          deleteMany: {
            args: Prisma.OAuthAuthorizationCodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OAuthAuthorizationCodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OAuthAuthorizationCodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthAuthorizationCodePayload>
          }
          aggregate: {
            args: Prisma.OAuthAuthorizationCodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOAuthAuthorizationCode>
          }
          groupBy: {
            args: Prisma.OAuthAuthorizationCodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<OAuthAuthorizationCodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.OAuthAuthorizationCodeCountArgs<ExtArgs>
            result: $Utils.Optional<OAuthAuthorizationCodeCountAggregateOutputType> | number
          }
        }
      }
      OAuthAccessToken: {
        payload: Prisma.$OAuthAccessTokenPayload<ExtArgs>
        fields: Prisma.OAuthAccessTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OAuthAccessTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthAccessTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OAuthAccessTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthAccessTokenPayload>
          }
          findFirst: {
            args: Prisma.OAuthAccessTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthAccessTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OAuthAccessTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthAccessTokenPayload>
          }
          findMany: {
            args: Prisma.OAuthAccessTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthAccessTokenPayload>[]
          }
          create: {
            args: Prisma.OAuthAccessTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthAccessTokenPayload>
          }
          createMany: {
            args: Prisma.OAuthAccessTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OAuthAccessTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthAccessTokenPayload>[]
          }
          delete: {
            args: Prisma.OAuthAccessTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthAccessTokenPayload>
          }
          update: {
            args: Prisma.OAuthAccessTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthAccessTokenPayload>
          }
          deleteMany: {
            args: Prisma.OAuthAccessTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OAuthAccessTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OAuthAccessTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthAccessTokenPayload>
          }
          aggregate: {
            args: Prisma.OAuthAccessTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOAuthAccessToken>
          }
          groupBy: {
            args: Prisma.OAuthAccessTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<OAuthAccessTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.OAuthAccessTokenCountArgs<ExtArgs>
            result: $Utils.Optional<OAuthAccessTokenCountAggregateOutputType> | number
          }
        }
      }
      OAuthRefreshToken: {
        payload: Prisma.$OAuthRefreshTokenPayload<ExtArgs>
        fields: Prisma.OAuthRefreshTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OAuthRefreshTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthRefreshTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OAuthRefreshTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthRefreshTokenPayload>
          }
          findFirst: {
            args: Prisma.OAuthRefreshTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthRefreshTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OAuthRefreshTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthRefreshTokenPayload>
          }
          findMany: {
            args: Prisma.OAuthRefreshTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthRefreshTokenPayload>[]
          }
          create: {
            args: Prisma.OAuthRefreshTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthRefreshTokenPayload>
          }
          createMany: {
            args: Prisma.OAuthRefreshTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OAuthRefreshTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthRefreshTokenPayload>[]
          }
          delete: {
            args: Prisma.OAuthRefreshTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthRefreshTokenPayload>
          }
          update: {
            args: Prisma.OAuthRefreshTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthRefreshTokenPayload>
          }
          deleteMany: {
            args: Prisma.OAuthRefreshTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OAuthRefreshTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OAuthRefreshTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthRefreshTokenPayload>
          }
          aggregate: {
            args: Prisma.OAuthRefreshTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOAuthRefreshToken>
          }
          groupBy: {
            args: Prisma.OAuthRefreshTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<OAuthRefreshTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.OAuthRefreshTokenCountArgs<ExtArgs>
            result: $Utils.Optional<OAuthRefreshTokenCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    user?: UserOmit
    post?: PostOmit
    oAuthClient?: OAuthClientOmit
    oAuthAuthorizationCode?: OAuthAuthorizationCodeOmit
    oAuthAccessToken?: OAuthAccessTokenOmit
    oAuthRefreshToken?: OAuthRefreshTokenOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    posts: number
    oauthClients: number
    authCodes: number
    accessTokens: number
    refreshTokens: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | UserCountOutputTypeCountPostsArgs
    oauthClients?: boolean | UserCountOutputTypeCountOauthClientsArgs
    authCodes?: boolean | UserCountOutputTypeCountAuthCodesArgs
    accessTokens?: boolean | UserCountOutputTypeCountAccessTokensArgs
    refreshTokens?: boolean | UserCountOutputTypeCountRefreshTokensArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOauthClientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OAuthClientWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuthCodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OAuthAuthorizationCodeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccessTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OAuthAccessTokenWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRefreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OAuthRefreshTokenWhereInput
  }


  /**
   * Count Type OAuthClientCountOutputType
   */

  export type OAuthClientCountOutputType = {
    accessTokens: number
    refreshTokens: number
    authorizationCodes: number
  }

  export type OAuthClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accessTokens?: boolean | OAuthClientCountOutputTypeCountAccessTokensArgs
    refreshTokens?: boolean | OAuthClientCountOutputTypeCountRefreshTokensArgs
    authorizationCodes?: boolean | OAuthClientCountOutputTypeCountAuthorizationCodesArgs
  }

  // Custom InputTypes
  /**
   * OAuthClientCountOutputType without action
   */
  export type OAuthClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthClientCountOutputType
     */
    select?: OAuthClientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OAuthClientCountOutputType without action
   */
  export type OAuthClientCountOutputTypeCountAccessTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OAuthAccessTokenWhereInput
  }

  /**
   * OAuthClientCountOutputType without action
   */
  export type OAuthClientCountOutputTypeCountRefreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OAuthRefreshTokenWhereInput
  }

  /**
   * OAuthClientCountOutputType without action
   */
  export type OAuthClientCountOutputTypeCountAuthorizationCodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OAuthAuthorizationCodeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    username: string | null
    password: string | null
    bio: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    username: string | null
    password: string | null
    bio: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    username: number
    password: number
    bio: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    bio?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    bio?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    bio?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    username: string | null
    password: string | null
    bio: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    bio?: boolean
    posts?: boolean | User$postsArgs<ExtArgs>
    oauthClients?: boolean | User$oauthClientsArgs<ExtArgs>
    authCodes?: boolean | User$authCodesArgs<ExtArgs>
    accessTokens?: boolean | User$accessTokensArgs<ExtArgs>
    refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    bio?: boolean
  }, ExtArgs["result"]["user"]>


  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    bio?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "username" | "password" | "bio", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | User$postsArgs<ExtArgs>
    oauthClients?: boolean | User$oauthClientsArgs<ExtArgs>
    authCodes?: boolean | User$authCodesArgs<ExtArgs>
    accessTokens?: boolean | User$accessTokensArgs<ExtArgs>
    refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      posts: Prisma.$PostPayload<ExtArgs>[]
      oauthClients: Prisma.$OAuthClientPayload<ExtArgs>[]
      authCodes: Prisma.$OAuthAuthorizationCodePayload<ExtArgs>[]
      accessTokens: Prisma.$OAuthAccessTokenPayload<ExtArgs>[]
      refreshTokens: Prisma.$OAuthRefreshTokenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      username: string | null
      password: string | null
      bio: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    oauthClients<T extends User$oauthClientsArgs<ExtArgs> = {}>(args?: Subset<T, User$oauthClientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OAuthClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    authCodes<T extends User$authCodesArgs<ExtArgs> = {}>(args?: Subset<T, User$authCodesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OAuthAuthorizationCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accessTokens<T extends User$accessTokensArgs<ExtArgs> = {}>(args?: Subset<T, User$accessTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OAuthAccessTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    refreshTokens<T extends User$refreshTokensArgs<ExtArgs> = {}>(args?: Subset<T, User$refreshTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OAuthRefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * User.oauthClients
   */
  export type User$oauthClientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthClient
     */
    select?: OAuthClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthClient
     */
    omit?: OAuthClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthClientInclude<ExtArgs> | null
    where?: OAuthClientWhereInput
    orderBy?: OAuthClientOrderByWithRelationInput | OAuthClientOrderByWithRelationInput[]
    cursor?: OAuthClientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OAuthClientScalarFieldEnum | OAuthClientScalarFieldEnum[]
  }

  /**
   * User.authCodes
   */
  export type User$authCodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthAuthorizationCode
     */
    select?: OAuthAuthorizationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthAuthorizationCode
     */
    omit?: OAuthAuthorizationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthAuthorizationCodeInclude<ExtArgs> | null
    where?: OAuthAuthorizationCodeWhereInput
    orderBy?: OAuthAuthorizationCodeOrderByWithRelationInput | OAuthAuthorizationCodeOrderByWithRelationInput[]
    cursor?: OAuthAuthorizationCodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OAuthAuthorizationCodeScalarFieldEnum | OAuthAuthorizationCodeScalarFieldEnum[]
  }

  /**
   * User.accessTokens
   */
  export type User$accessTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthAccessToken
     */
    select?: OAuthAccessTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthAccessToken
     */
    omit?: OAuthAccessTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthAccessTokenInclude<ExtArgs> | null
    where?: OAuthAccessTokenWhereInput
    orderBy?: OAuthAccessTokenOrderByWithRelationInput | OAuthAccessTokenOrderByWithRelationInput[]
    cursor?: OAuthAccessTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OAuthAccessTokenScalarFieldEnum | OAuthAccessTokenScalarFieldEnum[]
  }

  /**
   * User.refreshTokens
   */
  export type User$refreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthRefreshToken
     */
    select?: OAuthRefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthRefreshToken
     */
    omit?: OAuthRefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthRefreshTokenInclude<ExtArgs> | null
    where?: OAuthRefreshTokenWhereInput
    orderBy?: OAuthRefreshTokenOrderByWithRelationInput | OAuthRefreshTokenOrderByWithRelationInput[]
    cursor?: OAuthRefreshTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OAuthRefreshTokenScalarFieldEnum | OAuthRefreshTokenScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    id: number | null
    authorId: number | null
  }

  export type PostSumAggregateOutputType = {
    id: number | null
    authorId: number | null
  }

  export type PostMinAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    published: boolean | null
    authorId: number | null
  }

  export type PostMaxAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    published: boolean | null
    authorId: number | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    title: number
    content: number
    published: number
    authorId: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type PostSumAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    published?: true
    authorId?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    published?: true
    authorId?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    published?: true
    authorId?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: number
    title: string
    content: string | null
    published: boolean
    authorId: number | null
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    published?: boolean
    authorId?: boolean
    author?: boolean | Post$authorArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    published?: boolean
    authorId?: boolean
    author?: boolean | Post$authorArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>


  export type PostSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    published?: boolean
    authorId?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "published" | "authorId", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | Post$authorArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | Post$authorArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      author: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      content: string | null
      published: boolean
      authorId: number | null
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
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
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends Post$authorArgs<ExtArgs> = {}>(args?: Subset<T, Post$authorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'Int'>
    readonly title: FieldRef<"Post", 'String'>
    readonly content: FieldRef<"Post", 'String'>
    readonly published: FieldRef<"Post", 'Boolean'>
    readonly authorId: FieldRef<"Post", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
  }

  /**
   * Post.author
   */
  export type Post$authorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model OAuthClient
   */

  export type AggregateOAuthClient = {
    _count: OAuthClientCountAggregateOutputType | null
    _avg: OAuthClientAvgAggregateOutputType | null
    _sum: OAuthClientSumAggregateOutputType | null
    _min: OAuthClientMinAggregateOutputType | null
    _max: OAuthClientMaxAggregateOutputType | null
  }

  export type OAuthClientAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type OAuthClientSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type OAuthClientMinAggregateOutputType = {
    id: number | null
    clientId: string | null
    clientSecret: string | null
    userId: number | null
  }

  export type OAuthClientMaxAggregateOutputType = {
    id: number | null
    clientId: string | null
    clientSecret: string | null
    userId: number | null
  }

  export type OAuthClientCountAggregateOutputType = {
    id: number
    clientId: number
    clientSecret: number
    redirectUris: number
    grants: number
    userId: number
    _all: number
  }


  export type OAuthClientAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type OAuthClientSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type OAuthClientMinAggregateInputType = {
    id?: true
    clientId?: true
    clientSecret?: true
    userId?: true
  }

  export type OAuthClientMaxAggregateInputType = {
    id?: true
    clientId?: true
    clientSecret?: true
    userId?: true
  }

  export type OAuthClientCountAggregateInputType = {
    id?: true
    clientId?: true
    clientSecret?: true
    redirectUris?: true
    grants?: true
    userId?: true
    _all?: true
  }

  export type OAuthClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OAuthClient to aggregate.
     */
    where?: OAuthClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OAuthClients to fetch.
     */
    orderBy?: OAuthClientOrderByWithRelationInput | OAuthClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OAuthClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OAuthClients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OAuthClients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OAuthClients
    **/
    _count?: true | OAuthClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OAuthClientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OAuthClientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OAuthClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OAuthClientMaxAggregateInputType
  }

  export type GetOAuthClientAggregateType<T extends OAuthClientAggregateArgs> = {
        [P in keyof T & keyof AggregateOAuthClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOAuthClient[P]>
      : GetScalarType<T[P], AggregateOAuthClient[P]>
  }




  export type OAuthClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OAuthClientWhereInput
    orderBy?: OAuthClientOrderByWithAggregationInput | OAuthClientOrderByWithAggregationInput[]
    by: OAuthClientScalarFieldEnum[] | OAuthClientScalarFieldEnum
    having?: OAuthClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OAuthClientCountAggregateInputType | true
    _avg?: OAuthClientAvgAggregateInputType
    _sum?: OAuthClientSumAggregateInputType
    _min?: OAuthClientMinAggregateInputType
    _max?: OAuthClientMaxAggregateInputType
  }

  export type OAuthClientGroupByOutputType = {
    id: number
    clientId: string
    clientSecret: string
    redirectUris: string[]
    grants: string[]
    userId: number | null
    _count: OAuthClientCountAggregateOutputType | null
    _avg: OAuthClientAvgAggregateOutputType | null
    _sum: OAuthClientSumAggregateOutputType | null
    _min: OAuthClientMinAggregateOutputType | null
    _max: OAuthClientMaxAggregateOutputType | null
  }

  type GetOAuthClientGroupByPayload<T extends OAuthClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OAuthClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OAuthClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OAuthClientGroupByOutputType[P]>
            : GetScalarType<T[P], OAuthClientGroupByOutputType[P]>
        }
      >
    >


  export type OAuthClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    clientSecret?: boolean
    redirectUris?: boolean
    grants?: boolean
    userId?: boolean
    user?: boolean | OAuthClient$userArgs<ExtArgs>
    accessTokens?: boolean | OAuthClient$accessTokensArgs<ExtArgs>
    refreshTokens?: boolean | OAuthClient$refreshTokensArgs<ExtArgs>
    authorizationCodes?: boolean | OAuthClient$authorizationCodesArgs<ExtArgs>
    _count?: boolean | OAuthClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["oAuthClient"]>

  export type OAuthClientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    clientSecret?: boolean
    redirectUris?: boolean
    grants?: boolean
    userId?: boolean
    user?: boolean | OAuthClient$userArgs<ExtArgs>
  }, ExtArgs["result"]["oAuthClient"]>


  export type OAuthClientSelectScalar = {
    id?: boolean
    clientId?: boolean
    clientSecret?: boolean
    redirectUris?: boolean
    grants?: boolean
    userId?: boolean
  }

  export type OAuthClientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientId" | "clientSecret" | "redirectUris" | "grants" | "userId", ExtArgs["result"]["oAuthClient"]>
  export type OAuthClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | OAuthClient$userArgs<ExtArgs>
    accessTokens?: boolean | OAuthClient$accessTokensArgs<ExtArgs>
    refreshTokens?: boolean | OAuthClient$refreshTokensArgs<ExtArgs>
    authorizationCodes?: boolean | OAuthClient$authorizationCodesArgs<ExtArgs>
    _count?: boolean | OAuthClientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OAuthClientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | OAuthClient$userArgs<ExtArgs>
  }

  export type $OAuthClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OAuthClient"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      accessTokens: Prisma.$OAuthAccessTokenPayload<ExtArgs>[]
      refreshTokens: Prisma.$OAuthRefreshTokenPayload<ExtArgs>[]
      authorizationCodes: Prisma.$OAuthAuthorizationCodePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      clientId: string
      clientSecret: string
      redirectUris: string[]
      grants: string[]
      userId: number | null
    }, ExtArgs["result"]["oAuthClient"]>
    composites: {}
  }

  type OAuthClientGetPayload<S extends boolean | null | undefined | OAuthClientDefaultArgs> = $Result.GetResult<Prisma.$OAuthClientPayload, S>

  type OAuthClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OAuthClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OAuthClientCountAggregateInputType | true
    }

  export interface OAuthClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OAuthClient'], meta: { name: 'OAuthClient' } }
    /**
     * Find zero or one OAuthClient that matches the filter.
     * @param {OAuthClientFindUniqueArgs} args - Arguments to find a OAuthClient
     * @example
     * // Get one OAuthClient
     * const oAuthClient = await prisma.oAuthClient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OAuthClientFindUniqueArgs>(args: SelectSubset<T, OAuthClientFindUniqueArgs<ExtArgs>>): Prisma__OAuthClientClient<$Result.GetResult<Prisma.$OAuthClientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OAuthClient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OAuthClientFindUniqueOrThrowArgs} args - Arguments to find a OAuthClient
     * @example
     * // Get one OAuthClient
     * const oAuthClient = await prisma.oAuthClient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OAuthClientFindUniqueOrThrowArgs>(args: SelectSubset<T, OAuthClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OAuthClientClient<$Result.GetResult<Prisma.$OAuthClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OAuthClient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthClientFindFirstArgs} args - Arguments to find a OAuthClient
     * @example
     * // Get one OAuthClient
     * const oAuthClient = await prisma.oAuthClient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OAuthClientFindFirstArgs>(args?: SelectSubset<T, OAuthClientFindFirstArgs<ExtArgs>>): Prisma__OAuthClientClient<$Result.GetResult<Prisma.$OAuthClientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OAuthClient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthClientFindFirstOrThrowArgs} args - Arguments to find a OAuthClient
     * @example
     * // Get one OAuthClient
     * const oAuthClient = await prisma.oAuthClient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OAuthClientFindFirstOrThrowArgs>(args?: SelectSubset<T, OAuthClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__OAuthClientClient<$Result.GetResult<Prisma.$OAuthClientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OAuthClients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OAuthClients
     * const oAuthClients = await prisma.oAuthClient.findMany()
     * 
     * // Get first 10 OAuthClients
     * const oAuthClients = await prisma.oAuthClient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const oAuthClientWithIdOnly = await prisma.oAuthClient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OAuthClientFindManyArgs>(args?: SelectSubset<T, OAuthClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OAuthClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OAuthClient.
     * @param {OAuthClientCreateArgs} args - Arguments to create a OAuthClient.
     * @example
     * // Create one OAuthClient
     * const OAuthClient = await prisma.oAuthClient.create({
     *   data: {
     *     // ... data to create a OAuthClient
     *   }
     * })
     * 
     */
    create<T extends OAuthClientCreateArgs>(args: SelectSubset<T, OAuthClientCreateArgs<ExtArgs>>): Prisma__OAuthClientClient<$Result.GetResult<Prisma.$OAuthClientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OAuthClients.
     * @param {OAuthClientCreateManyArgs} args - Arguments to create many OAuthClients.
     * @example
     * // Create many OAuthClients
     * const oAuthClient = await prisma.oAuthClient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OAuthClientCreateManyArgs>(args?: SelectSubset<T, OAuthClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OAuthClients and returns the data saved in the database.
     * @param {OAuthClientCreateManyAndReturnArgs} args - Arguments to create many OAuthClients.
     * @example
     * // Create many OAuthClients
     * const oAuthClient = await prisma.oAuthClient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OAuthClients and only return the `id`
     * const oAuthClientWithIdOnly = await prisma.oAuthClient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OAuthClientCreateManyAndReturnArgs>(args?: SelectSubset<T, OAuthClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OAuthClientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OAuthClient.
     * @param {OAuthClientDeleteArgs} args - Arguments to delete one OAuthClient.
     * @example
     * // Delete one OAuthClient
     * const OAuthClient = await prisma.oAuthClient.delete({
     *   where: {
     *     // ... filter to delete one OAuthClient
     *   }
     * })
     * 
     */
    delete<T extends OAuthClientDeleteArgs>(args: SelectSubset<T, OAuthClientDeleteArgs<ExtArgs>>): Prisma__OAuthClientClient<$Result.GetResult<Prisma.$OAuthClientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OAuthClient.
     * @param {OAuthClientUpdateArgs} args - Arguments to update one OAuthClient.
     * @example
     * // Update one OAuthClient
     * const oAuthClient = await prisma.oAuthClient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OAuthClientUpdateArgs>(args: SelectSubset<T, OAuthClientUpdateArgs<ExtArgs>>): Prisma__OAuthClientClient<$Result.GetResult<Prisma.$OAuthClientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OAuthClients.
     * @param {OAuthClientDeleteManyArgs} args - Arguments to filter OAuthClients to delete.
     * @example
     * // Delete a few OAuthClients
     * const { count } = await prisma.oAuthClient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OAuthClientDeleteManyArgs>(args?: SelectSubset<T, OAuthClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OAuthClients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OAuthClients
     * const oAuthClient = await prisma.oAuthClient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OAuthClientUpdateManyArgs>(args: SelectSubset<T, OAuthClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OAuthClient.
     * @param {OAuthClientUpsertArgs} args - Arguments to update or create a OAuthClient.
     * @example
     * // Update or create a OAuthClient
     * const oAuthClient = await prisma.oAuthClient.upsert({
     *   create: {
     *     // ... data to create a OAuthClient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OAuthClient we want to update
     *   }
     * })
     */
    upsert<T extends OAuthClientUpsertArgs>(args: SelectSubset<T, OAuthClientUpsertArgs<ExtArgs>>): Prisma__OAuthClientClient<$Result.GetResult<Prisma.$OAuthClientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OAuthClients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthClientCountArgs} args - Arguments to filter OAuthClients to count.
     * @example
     * // Count the number of OAuthClients
     * const count = await prisma.oAuthClient.count({
     *   where: {
     *     // ... the filter for the OAuthClients we want to count
     *   }
     * })
    **/
    count<T extends OAuthClientCountArgs>(
      args?: Subset<T, OAuthClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OAuthClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OAuthClient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OAuthClientAggregateArgs>(args: Subset<T, OAuthClientAggregateArgs>): Prisma.PrismaPromise<GetOAuthClientAggregateType<T>>

    /**
     * Group by OAuthClient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthClientGroupByArgs} args - Group by arguments.
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
      T extends OAuthClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OAuthClientGroupByArgs['orderBy'] }
        : { orderBy?: OAuthClientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OAuthClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOAuthClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OAuthClient model
   */
  readonly fields: OAuthClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OAuthClient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OAuthClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends OAuthClient$userArgs<ExtArgs> = {}>(args?: Subset<T, OAuthClient$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    accessTokens<T extends OAuthClient$accessTokensArgs<ExtArgs> = {}>(args?: Subset<T, OAuthClient$accessTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OAuthAccessTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    refreshTokens<T extends OAuthClient$refreshTokensArgs<ExtArgs> = {}>(args?: Subset<T, OAuthClient$refreshTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OAuthRefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    authorizationCodes<T extends OAuthClient$authorizationCodesArgs<ExtArgs> = {}>(args?: Subset<T, OAuthClient$authorizationCodesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OAuthAuthorizationCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the OAuthClient model
   */
  interface OAuthClientFieldRefs {
    readonly id: FieldRef<"OAuthClient", 'Int'>
    readonly clientId: FieldRef<"OAuthClient", 'String'>
    readonly clientSecret: FieldRef<"OAuthClient", 'String'>
    readonly redirectUris: FieldRef<"OAuthClient", 'String[]'>
    readonly grants: FieldRef<"OAuthClient", 'String[]'>
    readonly userId: FieldRef<"OAuthClient", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * OAuthClient findUnique
   */
  export type OAuthClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthClient
     */
    select?: OAuthClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthClient
     */
    omit?: OAuthClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthClientInclude<ExtArgs> | null
    /**
     * Filter, which OAuthClient to fetch.
     */
    where: OAuthClientWhereUniqueInput
  }

  /**
   * OAuthClient findUniqueOrThrow
   */
  export type OAuthClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthClient
     */
    select?: OAuthClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthClient
     */
    omit?: OAuthClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthClientInclude<ExtArgs> | null
    /**
     * Filter, which OAuthClient to fetch.
     */
    where: OAuthClientWhereUniqueInput
  }

  /**
   * OAuthClient findFirst
   */
  export type OAuthClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthClient
     */
    select?: OAuthClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthClient
     */
    omit?: OAuthClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthClientInclude<ExtArgs> | null
    /**
     * Filter, which OAuthClient to fetch.
     */
    where?: OAuthClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OAuthClients to fetch.
     */
    orderBy?: OAuthClientOrderByWithRelationInput | OAuthClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OAuthClients.
     */
    cursor?: OAuthClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OAuthClients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OAuthClients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OAuthClients.
     */
    distinct?: OAuthClientScalarFieldEnum | OAuthClientScalarFieldEnum[]
  }

  /**
   * OAuthClient findFirstOrThrow
   */
  export type OAuthClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthClient
     */
    select?: OAuthClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthClient
     */
    omit?: OAuthClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthClientInclude<ExtArgs> | null
    /**
     * Filter, which OAuthClient to fetch.
     */
    where?: OAuthClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OAuthClients to fetch.
     */
    orderBy?: OAuthClientOrderByWithRelationInput | OAuthClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OAuthClients.
     */
    cursor?: OAuthClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OAuthClients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OAuthClients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OAuthClients.
     */
    distinct?: OAuthClientScalarFieldEnum | OAuthClientScalarFieldEnum[]
  }

  /**
   * OAuthClient findMany
   */
  export type OAuthClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthClient
     */
    select?: OAuthClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthClient
     */
    omit?: OAuthClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthClientInclude<ExtArgs> | null
    /**
     * Filter, which OAuthClients to fetch.
     */
    where?: OAuthClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OAuthClients to fetch.
     */
    orderBy?: OAuthClientOrderByWithRelationInput | OAuthClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OAuthClients.
     */
    cursor?: OAuthClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OAuthClients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OAuthClients.
     */
    skip?: number
    distinct?: OAuthClientScalarFieldEnum | OAuthClientScalarFieldEnum[]
  }

  /**
   * OAuthClient create
   */
  export type OAuthClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthClient
     */
    select?: OAuthClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthClient
     */
    omit?: OAuthClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthClientInclude<ExtArgs> | null
    /**
     * The data needed to create a OAuthClient.
     */
    data: XOR<OAuthClientCreateInput, OAuthClientUncheckedCreateInput>
  }

  /**
   * OAuthClient createMany
   */
  export type OAuthClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OAuthClients.
     */
    data: OAuthClientCreateManyInput | OAuthClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OAuthClient createManyAndReturn
   */
  export type OAuthClientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthClient
     */
    select?: OAuthClientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthClient
     */
    omit?: OAuthClientOmit<ExtArgs> | null
    /**
     * The data used to create many OAuthClients.
     */
    data: OAuthClientCreateManyInput | OAuthClientCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthClientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OAuthClient update
   */
  export type OAuthClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthClient
     */
    select?: OAuthClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthClient
     */
    omit?: OAuthClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthClientInclude<ExtArgs> | null
    /**
     * The data needed to update a OAuthClient.
     */
    data: XOR<OAuthClientUpdateInput, OAuthClientUncheckedUpdateInput>
    /**
     * Choose, which OAuthClient to update.
     */
    where: OAuthClientWhereUniqueInput
  }

  /**
   * OAuthClient updateMany
   */
  export type OAuthClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OAuthClients.
     */
    data: XOR<OAuthClientUpdateManyMutationInput, OAuthClientUncheckedUpdateManyInput>
    /**
     * Filter which OAuthClients to update
     */
    where?: OAuthClientWhereInput
  }

  /**
   * OAuthClient upsert
   */
  export type OAuthClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthClient
     */
    select?: OAuthClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthClient
     */
    omit?: OAuthClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthClientInclude<ExtArgs> | null
    /**
     * The filter to search for the OAuthClient to update in case it exists.
     */
    where: OAuthClientWhereUniqueInput
    /**
     * In case the OAuthClient found by the `where` argument doesn't exist, create a new OAuthClient with this data.
     */
    create: XOR<OAuthClientCreateInput, OAuthClientUncheckedCreateInput>
    /**
     * In case the OAuthClient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OAuthClientUpdateInput, OAuthClientUncheckedUpdateInput>
  }

  /**
   * OAuthClient delete
   */
  export type OAuthClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthClient
     */
    select?: OAuthClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthClient
     */
    omit?: OAuthClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthClientInclude<ExtArgs> | null
    /**
     * Filter which OAuthClient to delete.
     */
    where: OAuthClientWhereUniqueInput
  }

  /**
   * OAuthClient deleteMany
   */
  export type OAuthClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OAuthClients to delete
     */
    where?: OAuthClientWhereInput
  }

  /**
   * OAuthClient.user
   */
  export type OAuthClient$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * OAuthClient.accessTokens
   */
  export type OAuthClient$accessTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthAccessToken
     */
    select?: OAuthAccessTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthAccessToken
     */
    omit?: OAuthAccessTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthAccessTokenInclude<ExtArgs> | null
    where?: OAuthAccessTokenWhereInput
    orderBy?: OAuthAccessTokenOrderByWithRelationInput | OAuthAccessTokenOrderByWithRelationInput[]
    cursor?: OAuthAccessTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OAuthAccessTokenScalarFieldEnum | OAuthAccessTokenScalarFieldEnum[]
  }

  /**
   * OAuthClient.refreshTokens
   */
  export type OAuthClient$refreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthRefreshToken
     */
    select?: OAuthRefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthRefreshToken
     */
    omit?: OAuthRefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthRefreshTokenInclude<ExtArgs> | null
    where?: OAuthRefreshTokenWhereInput
    orderBy?: OAuthRefreshTokenOrderByWithRelationInput | OAuthRefreshTokenOrderByWithRelationInput[]
    cursor?: OAuthRefreshTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OAuthRefreshTokenScalarFieldEnum | OAuthRefreshTokenScalarFieldEnum[]
  }

  /**
   * OAuthClient.authorizationCodes
   */
  export type OAuthClient$authorizationCodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthAuthorizationCode
     */
    select?: OAuthAuthorizationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthAuthorizationCode
     */
    omit?: OAuthAuthorizationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthAuthorizationCodeInclude<ExtArgs> | null
    where?: OAuthAuthorizationCodeWhereInput
    orderBy?: OAuthAuthorizationCodeOrderByWithRelationInput | OAuthAuthorizationCodeOrderByWithRelationInput[]
    cursor?: OAuthAuthorizationCodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OAuthAuthorizationCodeScalarFieldEnum | OAuthAuthorizationCodeScalarFieldEnum[]
  }

  /**
   * OAuthClient without action
   */
  export type OAuthClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthClient
     */
    select?: OAuthClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthClient
     */
    omit?: OAuthClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthClientInclude<ExtArgs> | null
  }


  /**
   * Model OAuthAuthorizationCode
   */

  export type AggregateOAuthAuthorizationCode = {
    _count: OAuthAuthorizationCodeCountAggregateOutputType | null
    _avg: OAuthAuthorizationCodeAvgAggregateOutputType | null
    _sum: OAuthAuthorizationCodeSumAggregateOutputType | null
    _min: OAuthAuthorizationCodeMinAggregateOutputType | null
    _max: OAuthAuthorizationCodeMaxAggregateOutputType | null
  }

  export type OAuthAuthorizationCodeAvgAggregateOutputType = {
    id: number | null
    clientId: number | null
    userId: number | null
  }

  export type OAuthAuthorizationCodeSumAggregateOutputType = {
    id: number | null
    clientId: number | null
    userId: number | null
  }

  export type OAuthAuthorizationCodeMinAggregateOutputType = {
    id: number | null
    code: string | null
    expiresAt: Date | null
    redirectUri: string | null
    scope: string | null
    clientId: number | null
    userId: number | null
  }

  export type OAuthAuthorizationCodeMaxAggregateOutputType = {
    id: number | null
    code: string | null
    expiresAt: Date | null
    redirectUri: string | null
    scope: string | null
    clientId: number | null
    userId: number | null
  }

  export type OAuthAuthorizationCodeCountAggregateOutputType = {
    id: number
    code: number
    expiresAt: number
    redirectUri: number
    scope: number
    clientId: number
    userId: number
    _all: number
  }


  export type OAuthAuthorizationCodeAvgAggregateInputType = {
    id?: true
    clientId?: true
    userId?: true
  }

  export type OAuthAuthorizationCodeSumAggregateInputType = {
    id?: true
    clientId?: true
    userId?: true
  }

  export type OAuthAuthorizationCodeMinAggregateInputType = {
    id?: true
    code?: true
    expiresAt?: true
    redirectUri?: true
    scope?: true
    clientId?: true
    userId?: true
  }

  export type OAuthAuthorizationCodeMaxAggregateInputType = {
    id?: true
    code?: true
    expiresAt?: true
    redirectUri?: true
    scope?: true
    clientId?: true
    userId?: true
  }

  export type OAuthAuthorizationCodeCountAggregateInputType = {
    id?: true
    code?: true
    expiresAt?: true
    redirectUri?: true
    scope?: true
    clientId?: true
    userId?: true
    _all?: true
  }

  export type OAuthAuthorizationCodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OAuthAuthorizationCode to aggregate.
     */
    where?: OAuthAuthorizationCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OAuthAuthorizationCodes to fetch.
     */
    orderBy?: OAuthAuthorizationCodeOrderByWithRelationInput | OAuthAuthorizationCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OAuthAuthorizationCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OAuthAuthorizationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OAuthAuthorizationCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OAuthAuthorizationCodes
    **/
    _count?: true | OAuthAuthorizationCodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OAuthAuthorizationCodeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OAuthAuthorizationCodeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OAuthAuthorizationCodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OAuthAuthorizationCodeMaxAggregateInputType
  }

  export type GetOAuthAuthorizationCodeAggregateType<T extends OAuthAuthorizationCodeAggregateArgs> = {
        [P in keyof T & keyof AggregateOAuthAuthorizationCode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOAuthAuthorizationCode[P]>
      : GetScalarType<T[P], AggregateOAuthAuthorizationCode[P]>
  }




  export type OAuthAuthorizationCodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OAuthAuthorizationCodeWhereInput
    orderBy?: OAuthAuthorizationCodeOrderByWithAggregationInput | OAuthAuthorizationCodeOrderByWithAggregationInput[]
    by: OAuthAuthorizationCodeScalarFieldEnum[] | OAuthAuthorizationCodeScalarFieldEnum
    having?: OAuthAuthorizationCodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OAuthAuthorizationCodeCountAggregateInputType | true
    _avg?: OAuthAuthorizationCodeAvgAggregateInputType
    _sum?: OAuthAuthorizationCodeSumAggregateInputType
    _min?: OAuthAuthorizationCodeMinAggregateInputType
    _max?: OAuthAuthorizationCodeMaxAggregateInputType
  }

  export type OAuthAuthorizationCodeGroupByOutputType = {
    id: number
    code: string
    expiresAt: Date
    redirectUri: string
    scope: string | null
    clientId: number
    userId: number
    _count: OAuthAuthorizationCodeCountAggregateOutputType | null
    _avg: OAuthAuthorizationCodeAvgAggregateOutputType | null
    _sum: OAuthAuthorizationCodeSumAggregateOutputType | null
    _min: OAuthAuthorizationCodeMinAggregateOutputType | null
    _max: OAuthAuthorizationCodeMaxAggregateOutputType | null
  }

  type GetOAuthAuthorizationCodeGroupByPayload<T extends OAuthAuthorizationCodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OAuthAuthorizationCodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OAuthAuthorizationCodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OAuthAuthorizationCodeGroupByOutputType[P]>
            : GetScalarType<T[P], OAuthAuthorizationCodeGroupByOutputType[P]>
        }
      >
    >


  export type OAuthAuthorizationCodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    expiresAt?: boolean
    redirectUri?: boolean
    scope?: boolean
    clientId?: boolean
    userId?: boolean
    client?: boolean | OAuthClientDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["oAuthAuthorizationCode"]>

  export type OAuthAuthorizationCodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    expiresAt?: boolean
    redirectUri?: boolean
    scope?: boolean
    clientId?: boolean
    userId?: boolean
    client?: boolean | OAuthClientDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["oAuthAuthorizationCode"]>


  export type OAuthAuthorizationCodeSelectScalar = {
    id?: boolean
    code?: boolean
    expiresAt?: boolean
    redirectUri?: boolean
    scope?: boolean
    clientId?: boolean
    userId?: boolean
  }

  export type OAuthAuthorizationCodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "expiresAt" | "redirectUri" | "scope" | "clientId" | "userId", ExtArgs["result"]["oAuthAuthorizationCode"]>
  export type OAuthAuthorizationCodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | OAuthClientDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OAuthAuthorizationCodeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | OAuthClientDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OAuthAuthorizationCodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OAuthAuthorizationCode"
    objects: {
      client: Prisma.$OAuthClientPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      expiresAt: Date
      redirectUri: string
      scope: string | null
      clientId: number
      userId: number
    }, ExtArgs["result"]["oAuthAuthorizationCode"]>
    composites: {}
  }

  type OAuthAuthorizationCodeGetPayload<S extends boolean | null | undefined | OAuthAuthorizationCodeDefaultArgs> = $Result.GetResult<Prisma.$OAuthAuthorizationCodePayload, S>

  type OAuthAuthorizationCodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OAuthAuthorizationCodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OAuthAuthorizationCodeCountAggregateInputType | true
    }

  export interface OAuthAuthorizationCodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OAuthAuthorizationCode'], meta: { name: 'OAuthAuthorizationCode' } }
    /**
     * Find zero or one OAuthAuthorizationCode that matches the filter.
     * @param {OAuthAuthorizationCodeFindUniqueArgs} args - Arguments to find a OAuthAuthorizationCode
     * @example
     * // Get one OAuthAuthorizationCode
     * const oAuthAuthorizationCode = await prisma.oAuthAuthorizationCode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OAuthAuthorizationCodeFindUniqueArgs>(args: SelectSubset<T, OAuthAuthorizationCodeFindUniqueArgs<ExtArgs>>): Prisma__OAuthAuthorizationCodeClient<$Result.GetResult<Prisma.$OAuthAuthorizationCodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OAuthAuthorizationCode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OAuthAuthorizationCodeFindUniqueOrThrowArgs} args - Arguments to find a OAuthAuthorizationCode
     * @example
     * // Get one OAuthAuthorizationCode
     * const oAuthAuthorizationCode = await prisma.oAuthAuthorizationCode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OAuthAuthorizationCodeFindUniqueOrThrowArgs>(args: SelectSubset<T, OAuthAuthorizationCodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OAuthAuthorizationCodeClient<$Result.GetResult<Prisma.$OAuthAuthorizationCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OAuthAuthorizationCode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthAuthorizationCodeFindFirstArgs} args - Arguments to find a OAuthAuthorizationCode
     * @example
     * // Get one OAuthAuthorizationCode
     * const oAuthAuthorizationCode = await prisma.oAuthAuthorizationCode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OAuthAuthorizationCodeFindFirstArgs>(args?: SelectSubset<T, OAuthAuthorizationCodeFindFirstArgs<ExtArgs>>): Prisma__OAuthAuthorizationCodeClient<$Result.GetResult<Prisma.$OAuthAuthorizationCodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OAuthAuthorizationCode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthAuthorizationCodeFindFirstOrThrowArgs} args - Arguments to find a OAuthAuthorizationCode
     * @example
     * // Get one OAuthAuthorizationCode
     * const oAuthAuthorizationCode = await prisma.oAuthAuthorizationCode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OAuthAuthorizationCodeFindFirstOrThrowArgs>(args?: SelectSubset<T, OAuthAuthorizationCodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__OAuthAuthorizationCodeClient<$Result.GetResult<Prisma.$OAuthAuthorizationCodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OAuthAuthorizationCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthAuthorizationCodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OAuthAuthorizationCodes
     * const oAuthAuthorizationCodes = await prisma.oAuthAuthorizationCode.findMany()
     * 
     * // Get first 10 OAuthAuthorizationCodes
     * const oAuthAuthorizationCodes = await prisma.oAuthAuthorizationCode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const oAuthAuthorizationCodeWithIdOnly = await prisma.oAuthAuthorizationCode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OAuthAuthorizationCodeFindManyArgs>(args?: SelectSubset<T, OAuthAuthorizationCodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OAuthAuthorizationCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OAuthAuthorizationCode.
     * @param {OAuthAuthorizationCodeCreateArgs} args - Arguments to create a OAuthAuthorizationCode.
     * @example
     * // Create one OAuthAuthorizationCode
     * const OAuthAuthorizationCode = await prisma.oAuthAuthorizationCode.create({
     *   data: {
     *     // ... data to create a OAuthAuthorizationCode
     *   }
     * })
     * 
     */
    create<T extends OAuthAuthorizationCodeCreateArgs>(args: SelectSubset<T, OAuthAuthorizationCodeCreateArgs<ExtArgs>>): Prisma__OAuthAuthorizationCodeClient<$Result.GetResult<Prisma.$OAuthAuthorizationCodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OAuthAuthorizationCodes.
     * @param {OAuthAuthorizationCodeCreateManyArgs} args - Arguments to create many OAuthAuthorizationCodes.
     * @example
     * // Create many OAuthAuthorizationCodes
     * const oAuthAuthorizationCode = await prisma.oAuthAuthorizationCode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OAuthAuthorizationCodeCreateManyArgs>(args?: SelectSubset<T, OAuthAuthorizationCodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OAuthAuthorizationCodes and returns the data saved in the database.
     * @param {OAuthAuthorizationCodeCreateManyAndReturnArgs} args - Arguments to create many OAuthAuthorizationCodes.
     * @example
     * // Create many OAuthAuthorizationCodes
     * const oAuthAuthorizationCode = await prisma.oAuthAuthorizationCode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OAuthAuthorizationCodes and only return the `id`
     * const oAuthAuthorizationCodeWithIdOnly = await prisma.oAuthAuthorizationCode.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OAuthAuthorizationCodeCreateManyAndReturnArgs>(args?: SelectSubset<T, OAuthAuthorizationCodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OAuthAuthorizationCodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OAuthAuthorizationCode.
     * @param {OAuthAuthorizationCodeDeleteArgs} args - Arguments to delete one OAuthAuthorizationCode.
     * @example
     * // Delete one OAuthAuthorizationCode
     * const OAuthAuthorizationCode = await prisma.oAuthAuthorizationCode.delete({
     *   where: {
     *     // ... filter to delete one OAuthAuthorizationCode
     *   }
     * })
     * 
     */
    delete<T extends OAuthAuthorizationCodeDeleteArgs>(args: SelectSubset<T, OAuthAuthorizationCodeDeleteArgs<ExtArgs>>): Prisma__OAuthAuthorizationCodeClient<$Result.GetResult<Prisma.$OAuthAuthorizationCodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OAuthAuthorizationCode.
     * @param {OAuthAuthorizationCodeUpdateArgs} args - Arguments to update one OAuthAuthorizationCode.
     * @example
     * // Update one OAuthAuthorizationCode
     * const oAuthAuthorizationCode = await prisma.oAuthAuthorizationCode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OAuthAuthorizationCodeUpdateArgs>(args: SelectSubset<T, OAuthAuthorizationCodeUpdateArgs<ExtArgs>>): Prisma__OAuthAuthorizationCodeClient<$Result.GetResult<Prisma.$OAuthAuthorizationCodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OAuthAuthorizationCodes.
     * @param {OAuthAuthorizationCodeDeleteManyArgs} args - Arguments to filter OAuthAuthorizationCodes to delete.
     * @example
     * // Delete a few OAuthAuthorizationCodes
     * const { count } = await prisma.oAuthAuthorizationCode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OAuthAuthorizationCodeDeleteManyArgs>(args?: SelectSubset<T, OAuthAuthorizationCodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OAuthAuthorizationCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthAuthorizationCodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OAuthAuthorizationCodes
     * const oAuthAuthorizationCode = await prisma.oAuthAuthorizationCode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OAuthAuthorizationCodeUpdateManyArgs>(args: SelectSubset<T, OAuthAuthorizationCodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OAuthAuthorizationCode.
     * @param {OAuthAuthorizationCodeUpsertArgs} args - Arguments to update or create a OAuthAuthorizationCode.
     * @example
     * // Update or create a OAuthAuthorizationCode
     * const oAuthAuthorizationCode = await prisma.oAuthAuthorizationCode.upsert({
     *   create: {
     *     // ... data to create a OAuthAuthorizationCode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OAuthAuthorizationCode we want to update
     *   }
     * })
     */
    upsert<T extends OAuthAuthorizationCodeUpsertArgs>(args: SelectSubset<T, OAuthAuthorizationCodeUpsertArgs<ExtArgs>>): Prisma__OAuthAuthorizationCodeClient<$Result.GetResult<Prisma.$OAuthAuthorizationCodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OAuthAuthorizationCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthAuthorizationCodeCountArgs} args - Arguments to filter OAuthAuthorizationCodes to count.
     * @example
     * // Count the number of OAuthAuthorizationCodes
     * const count = await prisma.oAuthAuthorizationCode.count({
     *   where: {
     *     // ... the filter for the OAuthAuthorizationCodes we want to count
     *   }
     * })
    **/
    count<T extends OAuthAuthorizationCodeCountArgs>(
      args?: Subset<T, OAuthAuthorizationCodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OAuthAuthorizationCodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OAuthAuthorizationCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthAuthorizationCodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OAuthAuthorizationCodeAggregateArgs>(args: Subset<T, OAuthAuthorizationCodeAggregateArgs>): Prisma.PrismaPromise<GetOAuthAuthorizationCodeAggregateType<T>>

    /**
     * Group by OAuthAuthorizationCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthAuthorizationCodeGroupByArgs} args - Group by arguments.
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
      T extends OAuthAuthorizationCodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OAuthAuthorizationCodeGroupByArgs['orderBy'] }
        : { orderBy?: OAuthAuthorizationCodeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OAuthAuthorizationCodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOAuthAuthorizationCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OAuthAuthorizationCode model
   */
  readonly fields: OAuthAuthorizationCodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OAuthAuthorizationCode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OAuthAuthorizationCodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends OAuthClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OAuthClientDefaultArgs<ExtArgs>>): Prisma__OAuthClientClient<$Result.GetResult<Prisma.$OAuthClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OAuthAuthorizationCode model
   */
  interface OAuthAuthorizationCodeFieldRefs {
    readonly id: FieldRef<"OAuthAuthorizationCode", 'Int'>
    readonly code: FieldRef<"OAuthAuthorizationCode", 'String'>
    readonly expiresAt: FieldRef<"OAuthAuthorizationCode", 'DateTime'>
    readonly redirectUri: FieldRef<"OAuthAuthorizationCode", 'String'>
    readonly scope: FieldRef<"OAuthAuthorizationCode", 'String'>
    readonly clientId: FieldRef<"OAuthAuthorizationCode", 'Int'>
    readonly userId: FieldRef<"OAuthAuthorizationCode", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * OAuthAuthorizationCode findUnique
   */
  export type OAuthAuthorizationCodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthAuthorizationCode
     */
    select?: OAuthAuthorizationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthAuthorizationCode
     */
    omit?: OAuthAuthorizationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthAuthorizationCodeInclude<ExtArgs> | null
    /**
     * Filter, which OAuthAuthorizationCode to fetch.
     */
    where: OAuthAuthorizationCodeWhereUniqueInput
  }

  /**
   * OAuthAuthorizationCode findUniqueOrThrow
   */
  export type OAuthAuthorizationCodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthAuthorizationCode
     */
    select?: OAuthAuthorizationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthAuthorizationCode
     */
    omit?: OAuthAuthorizationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthAuthorizationCodeInclude<ExtArgs> | null
    /**
     * Filter, which OAuthAuthorizationCode to fetch.
     */
    where: OAuthAuthorizationCodeWhereUniqueInput
  }

  /**
   * OAuthAuthorizationCode findFirst
   */
  export type OAuthAuthorizationCodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthAuthorizationCode
     */
    select?: OAuthAuthorizationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthAuthorizationCode
     */
    omit?: OAuthAuthorizationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthAuthorizationCodeInclude<ExtArgs> | null
    /**
     * Filter, which OAuthAuthorizationCode to fetch.
     */
    where?: OAuthAuthorizationCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OAuthAuthorizationCodes to fetch.
     */
    orderBy?: OAuthAuthorizationCodeOrderByWithRelationInput | OAuthAuthorizationCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OAuthAuthorizationCodes.
     */
    cursor?: OAuthAuthorizationCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OAuthAuthorizationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OAuthAuthorizationCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OAuthAuthorizationCodes.
     */
    distinct?: OAuthAuthorizationCodeScalarFieldEnum | OAuthAuthorizationCodeScalarFieldEnum[]
  }

  /**
   * OAuthAuthorizationCode findFirstOrThrow
   */
  export type OAuthAuthorizationCodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthAuthorizationCode
     */
    select?: OAuthAuthorizationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthAuthorizationCode
     */
    omit?: OAuthAuthorizationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthAuthorizationCodeInclude<ExtArgs> | null
    /**
     * Filter, which OAuthAuthorizationCode to fetch.
     */
    where?: OAuthAuthorizationCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OAuthAuthorizationCodes to fetch.
     */
    orderBy?: OAuthAuthorizationCodeOrderByWithRelationInput | OAuthAuthorizationCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OAuthAuthorizationCodes.
     */
    cursor?: OAuthAuthorizationCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OAuthAuthorizationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OAuthAuthorizationCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OAuthAuthorizationCodes.
     */
    distinct?: OAuthAuthorizationCodeScalarFieldEnum | OAuthAuthorizationCodeScalarFieldEnum[]
  }

  /**
   * OAuthAuthorizationCode findMany
   */
  export type OAuthAuthorizationCodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthAuthorizationCode
     */
    select?: OAuthAuthorizationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthAuthorizationCode
     */
    omit?: OAuthAuthorizationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthAuthorizationCodeInclude<ExtArgs> | null
    /**
     * Filter, which OAuthAuthorizationCodes to fetch.
     */
    where?: OAuthAuthorizationCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OAuthAuthorizationCodes to fetch.
     */
    orderBy?: OAuthAuthorizationCodeOrderByWithRelationInput | OAuthAuthorizationCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OAuthAuthorizationCodes.
     */
    cursor?: OAuthAuthorizationCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OAuthAuthorizationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OAuthAuthorizationCodes.
     */
    skip?: number
    distinct?: OAuthAuthorizationCodeScalarFieldEnum | OAuthAuthorizationCodeScalarFieldEnum[]
  }

  /**
   * OAuthAuthorizationCode create
   */
  export type OAuthAuthorizationCodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthAuthorizationCode
     */
    select?: OAuthAuthorizationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthAuthorizationCode
     */
    omit?: OAuthAuthorizationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthAuthorizationCodeInclude<ExtArgs> | null
    /**
     * The data needed to create a OAuthAuthorizationCode.
     */
    data: XOR<OAuthAuthorizationCodeCreateInput, OAuthAuthorizationCodeUncheckedCreateInput>
  }

  /**
   * OAuthAuthorizationCode createMany
   */
  export type OAuthAuthorizationCodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OAuthAuthorizationCodes.
     */
    data: OAuthAuthorizationCodeCreateManyInput | OAuthAuthorizationCodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OAuthAuthorizationCode createManyAndReturn
   */
  export type OAuthAuthorizationCodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthAuthorizationCode
     */
    select?: OAuthAuthorizationCodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthAuthorizationCode
     */
    omit?: OAuthAuthorizationCodeOmit<ExtArgs> | null
    /**
     * The data used to create many OAuthAuthorizationCodes.
     */
    data: OAuthAuthorizationCodeCreateManyInput | OAuthAuthorizationCodeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthAuthorizationCodeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OAuthAuthorizationCode update
   */
  export type OAuthAuthorizationCodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthAuthorizationCode
     */
    select?: OAuthAuthorizationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthAuthorizationCode
     */
    omit?: OAuthAuthorizationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthAuthorizationCodeInclude<ExtArgs> | null
    /**
     * The data needed to update a OAuthAuthorizationCode.
     */
    data: XOR<OAuthAuthorizationCodeUpdateInput, OAuthAuthorizationCodeUncheckedUpdateInput>
    /**
     * Choose, which OAuthAuthorizationCode to update.
     */
    where: OAuthAuthorizationCodeWhereUniqueInput
  }

  /**
   * OAuthAuthorizationCode updateMany
   */
  export type OAuthAuthorizationCodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OAuthAuthorizationCodes.
     */
    data: XOR<OAuthAuthorizationCodeUpdateManyMutationInput, OAuthAuthorizationCodeUncheckedUpdateManyInput>
    /**
     * Filter which OAuthAuthorizationCodes to update
     */
    where?: OAuthAuthorizationCodeWhereInput
  }

  /**
   * OAuthAuthorizationCode upsert
   */
  export type OAuthAuthorizationCodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthAuthorizationCode
     */
    select?: OAuthAuthorizationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthAuthorizationCode
     */
    omit?: OAuthAuthorizationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthAuthorizationCodeInclude<ExtArgs> | null
    /**
     * The filter to search for the OAuthAuthorizationCode to update in case it exists.
     */
    where: OAuthAuthorizationCodeWhereUniqueInput
    /**
     * In case the OAuthAuthorizationCode found by the `where` argument doesn't exist, create a new OAuthAuthorizationCode with this data.
     */
    create: XOR<OAuthAuthorizationCodeCreateInput, OAuthAuthorizationCodeUncheckedCreateInput>
    /**
     * In case the OAuthAuthorizationCode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OAuthAuthorizationCodeUpdateInput, OAuthAuthorizationCodeUncheckedUpdateInput>
  }

  /**
   * OAuthAuthorizationCode delete
   */
  export type OAuthAuthorizationCodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthAuthorizationCode
     */
    select?: OAuthAuthorizationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthAuthorizationCode
     */
    omit?: OAuthAuthorizationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthAuthorizationCodeInclude<ExtArgs> | null
    /**
     * Filter which OAuthAuthorizationCode to delete.
     */
    where: OAuthAuthorizationCodeWhereUniqueInput
  }

  /**
   * OAuthAuthorizationCode deleteMany
   */
  export type OAuthAuthorizationCodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OAuthAuthorizationCodes to delete
     */
    where?: OAuthAuthorizationCodeWhereInput
  }

  /**
   * OAuthAuthorizationCode without action
   */
  export type OAuthAuthorizationCodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthAuthorizationCode
     */
    select?: OAuthAuthorizationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthAuthorizationCode
     */
    omit?: OAuthAuthorizationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthAuthorizationCodeInclude<ExtArgs> | null
  }


  /**
   * Model OAuthAccessToken
   */

  export type AggregateOAuthAccessToken = {
    _count: OAuthAccessTokenCountAggregateOutputType | null
    _avg: OAuthAccessTokenAvgAggregateOutputType | null
    _sum: OAuthAccessTokenSumAggregateOutputType | null
    _min: OAuthAccessTokenMinAggregateOutputType | null
    _max: OAuthAccessTokenMaxAggregateOutputType | null
  }

  export type OAuthAccessTokenAvgAggregateOutputType = {
    id: number | null
    clientId: number | null
    userId: number | null
  }

  export type OAuthAccessTokenSumAggregateOutputType = {
    id: number | null
    clientId: number | null
    userId: number | null
  }

  export type OAuthAccessTokenMinAggregateOutputType = {
    id: number | null
    accessToken: string | null
    expiresAt: Date | null
    scope: string | null
    clientId: number | null
    userId: number | null
  }

  export type OAuthAccessTokenMaxAggregateOutputType = {
    id: number | null
    accessToken: string | null
    expiresAt: Date | null
    scope: string | null
    clientId: number | null
    userId: number | null
  }

  export type OAuthAccessTokenCountAggregateOutputType = {
    id: number
    accessToken: number
    expiresAt: number
    scope: number
    clientId: number
    userId: number
    _all: number
  }


  export type OAuthAccessTokenAvgAggregateInputType = {
    id?: true
    clientId?: true
    userId?: true
  }

  export type OAuthAccessTokenSumAggregateInputType = {
    id?: true
    clientId?: true
    userId?: true
  }

  export type OAuthAccessTokenMinAggregateInputType = {
    id?: true
    accessToken?: true
    expiresAt?: true
    scope?: true
    clientId?: true
    userId?: true
  }

  export type OAuthAccessTokenMaxAggregateInputType = {
    id?: true
    accessToken?: true
    expiresAt?: true
    scope?: true
    clientId?: true
    userId?: true
  }

  export type OAuthAccessTokenCountAggregateInputType = {
    id?: true
    accessToken?: true
    expiresAt?: true
    scope?: true
    clientId?: true
    userId?: true
    _all?: true
  }

  export type OAuthAccessTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OAuthAccessToken to aggregate.
     */
    where?: OAuthAccessTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OAuthAccessTokens to fetch.
     */
    orderBy?: OAuthAccessTokenOrderByWithRelationInput | OAuthAccessTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OAuthAccessTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OAuthAccessTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OAuthAccessTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OAuthAccessTokens
    **/
    _count?: true | OAuthAccessTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OAuthAccessTokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OAuthAccessTokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OAuthAccessTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OAuthAccessTokenMaxAggregateInputType
  }

  export type GetOAuthAccessTokenAggregateType<T extends OAuthAccessTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateOAuthAccessToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOAuthAccessToken[P]>
      : GetScalarType<T[P], AggregateOAuthAccessToken[P]>
  }




  export type OAuthAccessTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OAuthAccessTokenWhereInput
    orderBy?: OAuthAccessTokenOrderByWithAggregationInput | OAuthAccessTokenOrderByWithAggregationInput[]
    by: OAuthAccessTokenScalarFieldEnum[] | OAuthAccessTokenScalarFieldEnum
    having?: OAuthAccessTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OAuthAccessTokenCountAggregateInputType | true
    _avg?: OAuthAccessTokenAvgAggregateInputType
    _sum?: OAuthAccessTokenSumAggregateInputType
    _min?: OAuthAccessTokenMinAggregateInputType
    _max?: OAuthAccessTokenMaxAggregateInputType
  }

  export type OAuthAccessTokenGroupByOutputType = {
    id: number
    accessToken: string
    expiresAt: Date
    scope: string | null
    clientId: number
    userId: number
    _count: OAuthAccessTokenCountAggregateOutputType | null
    _avg: OAuthAccessTokenAvgAggregateOutputType | null
    _sum: OAuthAccessTokenSumAggregateOutputType | null
    _min: OAuthAccessTokenMinAggregateOutputType | null
    _max: OAuthAccessTokenMaxAggregateOutputType | null
  }

  type GetOAuthAccessTokenGroupByPayload<T extends OAuthAccessTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OAuthAccessTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OAuthAccessTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OAuthAccessTokenGroupByOutputType[P]>
            : GetScalarType<T[P], OAuthAccessTokenGroupByOutputType[P]>
        }
      >
    >


  export type OAuthAccessTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accessToken?: boolean
    expiresAt?: boolean
    scope?: boolean
    clientId?: boolean
    userId?: boolean
    client?: boolean | OAuthClientDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["oAuthAccessToken"]>

  export type OAuthAccessTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accessToken?: boolean
    expiresAt?: boolean
    scope?: boolean
    clientId?: boolean
    userId?: boolean
    client?: boolean | OAuthClientDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["oAuthAccessToken"]>


  export type OAuthAccessTokenSelectScalar = {
    id?: boolean
    accessToken?: boolean
    expiresAt?: boolean
    scope?: boolean
    clientId?: boolean
    userId?: boolean
  }

  export type OAuthAccessTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accessToken" | "expiresAt" | "scope" | "clientId" | "userId", ExtArgs["result"]["oAuthAccessToken"]>
  export type OAuthAccessTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | OAuthClientDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OAuthAccessTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | OAuthClientDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OAuthAccessTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OAuthAccessToken"
    objects: {
      client: Prisma.$OAuthClientPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      accessToken: string
      expiresAt: Date
      scope: string | null
      clientId: number
      userId: number
    }, ExtArgs["result"]["oAuthAccessToken"]>
    composites: {}
  }

  type OAuthAccessTokenGetPayload<S extends boolean | null | undefined | OAuthAccessTokenDefaultArgs> = $Result.GetResult<Prisma.$OAuthAccessTokenPayload, S>

  type OAuthAccessTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OAuthAccessTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OAuthAccessTokenCountAggregateInputType | true
    }

  export interface OAuthAccessTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OAuthAccessToken'], meta: { name: 'OAuthAccessToken' } }
    /**
     * Find zero or one OAuthAccessToken that matches the filter.
     * @param {OAuthAccessTokenFindUniqueArgs} args - Arguments to find a OAuthAccessToken
     * @example
     * // Get one OAuthAccessToken
     * const oAuthAccessToken = await prisma.oAuthAccessToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OAuthAccessTokenFindUniqueArgs>(args: SelectSubset<T, OAuthAccessTokenFindUniqueArgs<ExtArgs>>): Prisma__OAuthAccessTokenClient<$Result.GetResult<Prisma.$OAuthAccessTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OAuthAccessToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OAuthAccessTokenFindUniqueOrThrowArgs} args - Arguments to find a OAuthAccessToken
     * @example
     * // Get one OAuthAccessToken
     * const oAuthAccessToken = await prisma.oAuthAccessToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OAuthAccessTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, OAuthAccessTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OAuthAccessTokenClient<$Result.GetResult<Prisma.$OAuthAccessTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OAuthAccessToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthAccessTokenFindFirstArgs} args - Arguments to find a OAuthAccessToken
     * @example
     * // Get one OAuthAccessToken
     * const oAuthAccessToken = await prisma.oAuthAccessToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OAuthAccessTokenFindFirstArgs>(args?: SelectSubset<T, OAuthAccessTokenFindFirstArgs<ExtArgs>>): Prisma__OAuthAccessTokenClient<$Result.GetResult<Prisma.$OAuthAccessTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OAuthAccessToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthAccessTokenFindFirstOrThrowArgs} args - Arguments to find a OAuthAccessToken
     * @example
     * // Get one OAuthAccessToken
     * const oAuthAccessToken = await prisma.oAuthAccessToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OAuthAccessTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, OAuthAccessTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__OAuthAccessTokenClient<$Result.GetResult<Prisma.$OAuthAccessTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OAuthAccessTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthAccessTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OAuthAccessTokens
     * const oAuthAccessTokens = await prisma.oAuthAccessToken.findMany()
     * 
     * // Get first 10 OAuthAccessTokens
     * const oAuthAccessTokens = await prisma.oAuthAccessToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const oAuthAccessTokenWithIdOnly = await prisma.oAuthAccessToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OAuthAccessTokenFindManyArgs>(args?: SelectSubset<T, OAuthAccessTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OAuthAccessTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OAuthAccessToken.
     * @param {OAuthAccessTokenCreateArgs} args - Arguments to create a OAuthAccessToken.
     * @example
     * // Create one OAuthAccessToken
     * const OAuthAccessToken = await prisma.oAuthAccessToken.create({
     *   data: {
     *     // ... data to create a OAuthAccessToken
     *   }
     * })
     * 
     */
    create<T extends OAuthAccessTokenCreateArgs>(args: SelectSubset<T, OAuthAccessTokenCreateArgs<ExtArgs>>): Prisma__OAuthAccessTokenClient<$Result.GetResult<Prisma.$OAuthAccessTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OAuthAccessTokens.
     * @param {OAuthAccessTokenCreateManyArgs} args - Arguments to create many OAuthAccessTokens.
     * @example
     * // Create many OAuthAccessTokens
     * const oAuthAccessToken = await prisma.oAuthAccessToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OAuthAccessTokenCreateManyArgs>(args?: SelectSubset<T, OAuthAccessTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OAuthAccessTokens and returns the data saved in the database.
     * @param {OAuthAccessTokenCreateManyAndReturnArgs} args - Arguments to create many OAuthAccessTokens.
     * @example
     * // Create many OAuthAccessTokens
     * const oAuthAccessToken = await prisma.oAuthAccessToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OAuthAccessTokens and only return the `id`
     * const oAuthAccessTokenWithIdOnly = await prisma.oAuthAccessToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OAuthAccessTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, OAuthAccessTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OAuthAccessTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OAuthAccessToken.
     * @param {OAuthAccessTokenDeleteArgs} args - Arguments to delete one OAuthAccessToken.
     * @example
     * // Delete one OAuthAccessToken
     * const OAuthAccessToken = await prisma.oAuthAccessToken.delete({
     *   where: {
     *     // ... filter to delete one OAuthAccessToken
     *   }
     * })
     * 
     */
    delete<T extends OAuthAccessTokenDeleteArgs>(args: SelectSubset<T, OAuthAccessTokenDeleteArgs<ExtArgs>>): Prisma__OAuthAccessTokenClient<$Result.GetResult<Prisma.$OAuthAccessTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OAuthAccessToken.
     * @param {OAuthAccessTokenUpdateArgs} args - Arguments to update one OAuthAccessToken.
     * @example
     * // Update one OAuthAccessToken
     * const oAuthAccessToken = await prisma.oAuthAccessToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OAuthAccessTokenUpdateArgs>(args: SelectSubset<T, OAuthAccessTokenUpdateArgs<ExtArgs>>): Prisma__OAuthAccessTokenClient<$Result.GetResult<Prisma.$OAuthAccessTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OAuthAccessTokens.
     * @param {OAuthAccessTokenDeleteManyArgs} args - Arguments to filter OAuthAccessTokens to delete.
     * @example
     * // Delete a few OAuthAccessTokens
     * const { count } = await prisma.oAuthAccessToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OAuthAccessTokenDeleteManyArgs>(args?: SelectSubset<T, OAuthAccessTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OAuthAccessTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthAccessTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OAuthAccessTokens
     * const oAuthAccessToken = await prisma.oAuthAccessToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OAuthAccessTokenUpdateManyArgs>(args: SelectSubset<T, OAuthAccessTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OAuthAccessToken.
     * @param {OAuthAccessTokenUpsertArgs} args - Arguments to update or create a OAuthAccessToken.
     * @example
     * // Update or create a OAuthAccessToken
     * const oAuthAccessToken = await prisma.oAuthAccessToken.upsert({
     *   create: {
     *     // ... data to create a OAuthAccessToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OAuthAccessToken we want to update
     *   }
     * })
     */
    upsert<T extends OAuthAccessTokenUpsertArgs>(args: SelectSubset<T, OAuthAccessTokenUpsertArgs<ExtArgs>>): Prisma__OAuthAccessTokenClient<$Result.GetResult<Prisma.$OAuthAccessTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OAuthAccessTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthAccessTokenCountArgs} args - Arguments to filter OAuthAccessTokens to count.
     * @example
     * // Count the number of OAuthAccessTokens
     * const count = await prisma.oAuthAccessToken.count({
     *   where: {
     *     // ... the filter for the OAuthAccessTokens we want to count
     *   }
     * })
    **/
    count<T extends OAuthAccessTokenCountArgs>(
      args?: Subset<T, OAuthAccessTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OAuthAccessTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OAuthAccessToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthAccessTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OAuthAccessTokenAggregateArgs>(args: Subset<T, OAuthAccessTokenAggregateArgs>): Prisma.PrismaPromise<GetOAuthAccessTokenAggregateType<T>>

    /**
     * Group by OAuthAccessToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthAccessTokenGroupByArgs} args - Group by arguments.
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
      T extends OAuthAccessTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OAuthAccessTokenGroupByArgs['orderBy'] }
        : { orderBy?: OAuthAccessTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OAuthAccessTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOAuthAccessTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OAuthAccessToken model
   */
  readonly fields: OAuthAccessTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OAuthAccessToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OAuthAccessTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends OAuthClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OAuthClientDefaultArgs<ExtArgs>>): Prisma__OAuthClientClient<$Result.GetResult<Prisma.$OAuthClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OAuthAccessToken model
   */
  interface OAuthAccessTokenFieldRefs {
    readonly id: FieldRef<"OAuthAccessToken", 'Int'>
    readonly accessToken: FieldRef<"OAuthAccessToken", 'String'>
    readonly expiresAt: FieldRef<"OAuthAccessToken", 'DateTime'>
    readonly scope: FieldRef<"OAuthAccessToken", 'String'>
    readonly clientId: FieldRef<"OAuthAccessToken", 'Int'>
    readonly userId: FieldRef<"OAuthAccessToken", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * OAuthAccessToken findUnique
   */
  export type OAuthAccessTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthAccessToken
     */
    select?: OAuthAccessTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthAccessToken
     */
    omit?: OAuthAccessTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthAccessTokenInclude<ExtArgs> | null
    /**
     * Filter, which OAuthAccessToken to fetch.
     */
    where: OAuthAccessTokenWhereUniqueInput
  }

  /**
   * OAuthAccessToken findUniqueOrThrow
   */
  export type OAuthAccessTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthAccessToken
     */
    select?: OAuthAccessTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthAccessToken
     */
    omit?: OAuthAccessTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthAccessTokenInclude<ExtArgs> | null
    /**
     * Filter, which OAuthAccessToken to fetch.
     */
    where: OAuthAccessTokenWhereUniqueInput
  }

  /**
   * OAuthAccessToken findFirst
   */
  export type OAuthAccessTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthAccessToken
     */
    select?: OAuthAccessTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthAccessToken
     */
    omit?: OAuthAccessTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthAccessTokenInclude<ExtArgs> | null
    /**
     * Filter, which OAuthAccessToken to fetch.
     */
    where?: OAuthAccessTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OAuthAccessTokens to fetch.
     */
    orderBy?: OAuthAccessTokenOrderByWithRelationInput | OAuthAccessTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OAuthAccessTokens.
     */
    cursor?: OAuthAccessTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OAuthAccessTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OAuthAccessTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OAuthAccessTokens.
     */
    distinct?: OAuthAccessTokenScalarFieldEnum | OAuthAccessTokenScalarFieldEnum[]
  }

  /**
   * OAuthAccessToken findFirstOrThrow
   */
  export type OAuthAccessTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthAccessToken
     */
    select?: OAuthAccessTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthAccessToken
     */
    omit?: OAuthAccessTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthAccessTokenInclude<ExtArgs> | null
    /**
     * Filter, which OAuthAccessToken to fetch.
     */
    where?: OAuthAccessTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OAuthAccessTokens to fetch.
     */
    orderBy?: OAuthAccessTokenOrderByWithRelationInput | OAuthAccessTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OAuthAccessTokens.
     */
    cursor?: OAuthAccessTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OAuthAccessTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OAuthAccessTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OAuthAccessTokens.
     */
    distinct?: OAuthAccessTokenScalarFieldEnum | OAuthAccessTokenScalarFieldEnum[]
  }

  /**
   * OAuthAccessToken findMany
   */
  export type OAuthAccessTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthAccessToken
     */
    select?: OAuthAccessTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthAccessToken
     */
    omit?: OAuthAccessTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthAccessTokenInclude<ExtArgs> | null
    /**
     * Filter, which OAuthAccessTokens to fetch.
     */
    where?: OAuthAccessTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OAuthAccessTokens to fetch.
     */
    orderBy?: OAuthAccessTokenOrderByWithRelationInput | OAuthAccessTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OAuthAccessTokens.
     */
    cursor?: OAuthAccessTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OAuthAccessTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OAuthAccessTokens.
     */
    skip?: number
    distinct?: OAuthAccessTokenScalarFieldEnum | OAuthAccessTokenScalarFieldEnum[]
  }

  /**
   * OAuthAccessToken create
   */
  export type OAuthAccessTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthAccessToken
     */
    select?: OAuthAccessTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthAccessToken
     */
    omit?: OAuthAccessTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthAccessTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a OAuthAccessToken.
     */
    data: XOR<OAuthAccessTokenCreateInput, OAuthAccessTokenUncheckedCreateInput>
  }

  /**
   * OAuthAccessToken createMany
   */
  export type OAuthAccessTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OAuthAccessTokens.
     */
    data: OAuthAccessTokenCreateManyInput | OAuthAccessTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OAuthAccessToken createManyAndReturn
   */
  export type OAuthAccessTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthAccessToken
     */
    select?: OAuthAccessTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthAccessToken
     */
    omit?: OAuthAccessTokenOmit<ExtArgs> | null
    /**
     * The data used to create many OAuthAccessTokens.
     */
    data: OAuthAccessTokenCreateManyInput | OAuthAccessTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthAccessTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OAuthAccessToken update
   */
  export type OAuthAccessTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthAccessToken
     */
    select?: OAuthAccessTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthAccessToken
     */
    omit?: OAuthAccessTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthAccessTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a OAuthAccessToken.
     */
    data: XOR<OAuthAccessTokenUpdateInput, OAuthAccessTokenUncheckedUpdateInput>
    /**
     * Choose, which OAuthAccessToken to update.
     */
    where: OAuthAccessTokenWhereUniqueInput
  }

  /**
   * OAuthAccessToken updateMany
   */
  export type OAuthAccessTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OAuthAccessTokens.
     */
    data: XOR<OAuthAccessTokenUpdateManyMutationInput, OAuthAccessTokenUncheckedUpdateManyInput>
    /**
     * Filter which OAuthAccessTokens to update
     */
    where?: OAuthAccessTokenWhereInput
  }

  /**
   * OAuthAccessToken upsert
   */
  export type OAuthAccessTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthAccessToken
     */
    select?: OAuthAccessTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthAccessToken
     */
    omit?: OAuthAccessTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthAccessTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the OAuthAccessToken to update in case it exists.
     */
    where: OAuthAccessTokenWhereUniqueInput
    /**
     * In case the OAuthAccessToken found by the `where` argument doesn't exist, create a new OAuthAccessToken with this data.
     */
    create: XOR<OAuthAccessTokenCreateInput, OAuthAccessTokenUncheckedCreateInput>
    /**
     * In case the OAuthAccessToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OAuthAccessTokenUpdateInput, OAuthAccessTokenUncheckedUpdateInput>
  }

  /**
   * OAuthAccessToken delete
   */
  export type OAuthAccessTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthAccessToken
     */
    select?: OAuthAccessTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthAccessToken
     */
    omit?: OAuthAccessTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthAccessTokenInclude<ExtArgs> | null
    /**
     * Filter which OAuthAccessToken to delete.
     */
    where: OAuthAccessTokenWhereUniqueInput
  }

  /**
   * OAuthAccessToken deleteMany
   */
  export type OAuthAccessTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OAuthAccessTokens to delete
     */
    where?: OAuthAccessTokenWhereInput
  }

  /**
   * OAuthAccessToken without action
   */
  export type OAuthAccessTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthAccessToken
     */
    select?: OAuthAccessTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthAccessToken
     */
    omit?: OAuthAccessTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthAccessTokenInclude<ExtArgs> | null
  }


  /**
   * Model OAuthRefreshToken
   */

  export type AggregateOAuthRefreshToken = {
    _count: OAuthRefreshTokenCountAggregateOutputType | null
    _avg: OAuthRefreshTokenAvgAggregateOutputType | null
    _sum: OAuthRefreshTokenSumAggregateOutputType | null
    _min: OAuthRefreshTokenMinAggregateOutputType | null
    _max: OAuthRefreshTokenMaxAggregateOutputType | null
  }

  export type OAuthRefreshTokenAvgAggregateOutputType = {
    id: number | null
    clientId: number | null
    userId: number | null
  }

  export type OAuthRefreshTokenSumAggregateOutputType = {
    id: number | null
    clientId: number | null
    userId: number | null
  }

  export type OAuthRefreshTokenMinAggregateOutputType = {
    id: number | null
    refreshToken: string | null
    expiresAt: Date | null
    scope: string | null
    clientId: number | null
    userId: number | null
  }

  export type OAuthRefreshTokenMaxAggregateOutputType = {
    id: number | null
    refreshToken: string | null
    expiresAt: Date | null
    scope: string | null
    clientId: number | null
    userId: number | null
  }

  export type OAuthRefreshTokenCountAggregateOutputType = {
    id: number
    refreshToken: number
    expiresAt: number
    scope: number
    clientId: number
    userId: number
    _all: number
  }


  export type OAuthRefreshTokenAvgAggregateInputType = {
    id?: true
    clientId?: true
    userId?: true
  }

  export type OAuthRefreshTokenSumAggregateInputType = {
    id?: true
    clientId?: true
    userId?: true
  }

  export type OAuthRefreshTokenMinAggregateInputType = {
    id?: true
    refreshToken?: true
    expiresAt?: true
    scope?: true
    clientId?: true
    userId?: true
  }

  export type OAuthRefreshTokenMaxAggregateInputType = {
    id?: true
    refreshToken?: true
    expiresAt?: true
    scope?: true
    clientId?: true
    userId?: true
  }

  export type OAuthRefreshTokenCountAggregateInputType = {
    id?: true
    refreshToken?: true
    expiresAt?: true
    scope?: true
    clientId?: true
    userId?: true
    _all?: true
  }

  export type OAuthRefreshTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OAuthRefreshToken to aggregate.
     */
    where?: OAuthRefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OAuthRefreshTokens to fetch.
     */
    orderBy?: OAuthRefreshTokenOrderByWithRelationInput | OAuthRefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OAuthRefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OAuthRefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OAuthRefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OAuthRefreshTokens
    **/
    _count?: true | OAuthRefreshTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OAuthRefreshTokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OAuthRefreshTokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OAuthRefreshTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OAuthRefreshTokenMaxAggregateInputType
  }

  export type GetOAuthRefreshTokenAggregateType<T extends OAuthRefreshTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateOAuthRefreshToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOAuthRefreshToken[P]>
      : GetScalarType<T[P], AggregateOAuthRefreshToken[P]>
  }




  export type OAuthRefreshTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OAuthRefreshTokenWhereInput
    orderBy?: OAuthRefreshTokenOrderByWithAggregationInput | OAuthRefreshTokenOrderByWithAggregationInput[]
    by: OAuthRefreshTokenScalarFieldEnum[] | OAuthRefreshTokenScalarFieldEnum
    having?: OAuthRefreshTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OAuthRefreshTokenCountAggregateInputType | true
    _avg?: OAuthRefreshTokenAvgAggregateInputType
    _sum?: OAuthRefreshTokenSumAggregateInputType
    _min?: OAuthRefreshTokenMinAggregateInputType
    _max?: OAuthRefreshTokenMaxAggregateInputType
  }

  export type OAuthRefreshTokenGroupByOutputType = {
    id: number
    refreshToken: string
    expiresAt: Date
    scope: string | null
    clientId: number
    userId: number
    _count: OAuthRefreshTokenCountAggregateOutputType | null
    _avg: OAuthRefreshTokenAvgAggregateOutputType | null
    _sum: OAuthRefreshTokenSumAggregateOutputType | null
    _min: OAuthRefreshTokenMinAggregateOutputType | null
    _max: OAuthRefreshTokenMaxAggregateOutputType | null
  }

  type GetOAuthRefreshTokenGroupByPayload<T extends OAuthRefreshTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OAuthRefreshTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OAuthRefreshTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OAuthRefreshTokenGroupByOutputType[P]>
            : GetScalarType<T[P], OAuthRefreshTokenGroupByOutputType[P]>
        }
      >
    >


  export type OAuthRefreshTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    scope?: boolean
    clientId?: boolean
    userId?: boolean
    client?: boolean | OAuthClientDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["oAuthRefreshToken"]>

  export type OAuthRefreshTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    scope?: boolean
    clientId?: boolean
    userId?: boolean
    client?: boolean | OAuthClientDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["oAuthRefreshToken"]>


  export type OAuthRefreshTokenSelectScalar = {
    id?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    scope?: boolean
    clientId?: boolean
    userId?: boolean
  }

  export type OAuthRefreshTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "refreshToken" | "expiresAt" | "scope" | "clientId" | "userId", ExtArgs["result"]["oAuthRefreshToken"]>
  export type OAuthRefreshTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | OAuthClientDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OAuthRefreshTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | OAuthClientDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OAuthRefreshTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OAuthRefreshToken"
    objects: {
      client: Prisma.$OAuthClientPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      refreshToken: string
      expiresAt: Date
      scope: string | null
      clientId: number
      userId: number
    }, ExtArgs["result"]["oAuthRefreshToken"]>
    composites: {}
  }

  type OAuthRefreshTokenGetPayload<S extends boolean | null | undefined | OAuthRefreshTokenDefaultArgs> = $Result.GetResult<Prisma.$OAuthRefreshTokenPayload, S>

  type OAuthRefreshTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OAuthRefreshTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OAuthRefreshTokenCountAggregateInputType | true
    }

  export interface OAuthRefreshTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OAuthRefreshToken'], meta: { name: 'OAuthRefreshToken' } }
    /**
     * Find zero or one OAuthRefreshToken that matches the filter.
     * @param {OAuthRefreshTokenFindUniqueArgs} args - Arguments to find a OAuthRefreshToken
     * @example
     * // Get one OAuthRefreshToken
     * const oAuthRefreshToken = await prisma.oAuthRefreshToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OAuthRefreshTokenFindUniqueArgs>(args: SelectSubset<T, OAuthRefreshTokenFindUniqueArgs<ExtArgs>>): Prisma__OAuthRefreshTokenClient<$Result.GetResult<Prisma.$OAuthRefreshTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OAuthRefreshToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OAuthRefreshTokenFindUniqueOrThrowArgs} args - Arguments to find a OAuthRefreshToken
     * @example
     * // Get one OAuthRefreshToken
     * const oAuthRefreshToken = await prisma.oAuthRefreshToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OAuthRefreshTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, OAuthRefreshTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OAuthRefreshTokenClient<$Result.GetResult<Prisma.$OAuthRefreshTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OAuthRefreshToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthRefreshTokenFindFirstArgs} args - Arguments to find a OAuthRefreshToken
     * @example
     * // Get one OAuthRefreshToken
     * const oAuthRefreshToken = await prisma.oAuthRefreshToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OAuthRefreshTokenFindFirstArgs>(args?: SelectSubset<T, OAuthRefreshTokenFindFirstArgs<ExtArgs>>): Prisma__OAuthRefreshTokenClient<$Result.GetResult<Prisma.$OAuthRefreshTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OAuthRefreshToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthRefreshTokenFindFirstOrThrowArgs} args - Arguments to find a OAuthRefreshToken
     * @example
     * // Get one OAuthRefreshToken
     * const oAuthRefreshToken = await prisma.oAuthRefreshToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OAuthRefreshTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, OAuthRefreshTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__OAuthRefreshTokenClient<$Result.GetResult<Prisma.$OAuthRefreshTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OAuthRefreshTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthRefreshTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OAuthRefreshTokens
     * const oAuthRefreshTokens = await prisma.oAuthRefreshToken.findMany()
     * 
     * // Get first 10 OAuthRefreshTokens
     * const oAuthRefreshTokens = await prisma.oAuthRefreshToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const oAuthRefreshTokenWithIdOnly = await prisma.oAuthRefreshToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OAuthRefreshTokenFindManyArgs>(args?: SelectSubset<T, OAuthRefreshTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OAuthRefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OAuthRefreshToken.
     * @param {OAuthRefreshTokenCreateArgs} args - Arguments to create a OAuthRefreshToken.
     * @example
     * // Create one OAuthRefreshToken
     * const OAuthRefreshToken = await prisma.oAuthRefreshToken.create({
     *   data: {
     *     // ... data to create a OAuthRefreshToken
     *   }
     * })
     * 
     */
    create<T extends OAuthRefreshTokenCreateArgs>(args: SelectSubset<T, OAuthRefreshTokenCreateArgs<ExtArgs>>): Prisma__OAuthRefreshTokenClient<$Result.GetResult<Prisma.$OAuthRefreshTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OAuthRefreshTokens.
     * @param {OAuthRefreshTokenCreateManyArgs} args - Arguments to create many OAuthRefreshTokens.
     * @example
     * // Create many OAuthRefreshTokens
     * const oAuthRefreshToken = await prisma.oAuthRefreshToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OAuthRefreshTokenCreateManyArgs>(args?: SelectSubset<T, OAuthRefreshTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OAuthRefreshTokens and returns the data saved in the database.
     * @param {OAuthRefreshTokenCreateManyAndReturnArgs} args - Arguments to create many OAuthRefreshTokens.
     * @example
     * // Create many OAuthRefreshTokens
     * const oAuthRefreshToken = await prisma.oAuthRefreshToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OAuthRefreshTokens and only return the `id`
     * const oAuthRefreshTokenWithIdOnly = await prisma.oAuthRefreshToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OAuthRefreshTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, OAuthRefreshTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OAuthRefreshTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OAuthRefreshToken.
     * @param {OAuthRefreshTokenDeleteArgs} args - Arguments to delete one OAuthRefreshToken.
     * @example
     * // Delete one OAuthRefreshToken
     * const OAuthRefreshToken = await prisma.oAuthRefreshToken.delete({
     *   where: {
     *     // ... filter to delete one OAuthRefreshToken
     *   }
     * })
     * 
     */
    delete<T extends OAuthRefreshTokenDeleteArgs>(args: SelectSubset<T, OAuthRefreshTokenDeleteArgs<ExtArgs>>): Prisma__OAuthRefreshTokenClient<$Result.GetResult<Prisma.$OAuthRefreshTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OAuthRefreshToken.
     * @param {OAuthRefreshTokenUpdateArgs} args - Arguments to update one OAuthRefreshToken.
     * @example
     * // Update one OAuthRefreshToken
     * const oAuthRefreshToken = await prisma.oAuthRefreshToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OAuthRefreshTokenUpdateArgs>(args: SelectSubset<T, OAuthRefreshTokenUpdateArgs<ExtArgs>>): Prisma__OAuthRefreshTokenClient<$Result.GetResult<Prisma.$OAuthRefreshTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OAuthRefreshTokens.
     * @param {OAuthRefreshTokenDeleteManyArgs} args - Arguments to filter OAuthRefreshTokens to delete.
     * @example
     * // Delete a few OAuthRefreshTokens
     * const { count } = await prisma.oAuthRefreshToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OAuthRefreshTokenDeleteManyArgs>(args?: SelectSubset<T, OAuthRefreshTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OAuthRefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthRefreshTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OAuthRefreshTokens
     * const oAuthRefreshToken = await prisma.oAuthRefreshToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OAuthRefreshTokenUpdateManyArgs>(args: SelectSubset<T, OAuthRefreshTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OAuthRefreshToken.
     * @param {OAuthRefreshTokenUpsertArgs} args - Arguments to update or create a OAuthRefreshToken.
     * @example
     * // Update or create a OAuthRefreshToken
     * const oAuthRefreshToken = await prisma.oAuthRefreshToken.upsert({
     *   create: {
     *     // ... data to create a OAuthRefreshToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OAuthRefreshToken we want to update
     *   }
     * })
     */
    upsert<T extends OAuthRefreshTokenUpsertArgs>(args: SelectSubset<T, OAuthRefreshTokenUpsertArgs<ExtArgs>>): Prisma__OAuthRefreshTokenClient<$Result.GetResult<Prisma.$OAuthRefreshTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OAuthRefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthRefreshTokenCountArgs} args - Arguments to filter OAuthRefreshTokens to count.
     * @example
     * // Count the number of OAuthRefreshTokens
     * const count = await prisma.oAuthRefreshToken.count({
     *   where: {
     *     // ... the filter for the OAuthRefreshTokens we want to count
     *   }
     * })
    **/
    count<T extends OAuthRefreshTokenCountArgs>(
      args?: Subset<T, OAuthRefreshTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OAuthRefreshTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OAuthRefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthRefreshTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OAuthRefreshTokenAggregateArgs>(args: Subset<T, OAuthRefreshTokenAggregateArgs>): Prisma.PrismaPromise<GetOAuthRefreshTokenAggregateType<T>>

    /**
     * Group by OAuthRefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthRefreshTokenGroupByArgs} args - Group by arguments.
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
      T extends OAuthRefreshTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OAuthRefreshTokenGroupByArgs['orderBy'] }
        : { orderBy?: OAuthRefreshTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OAuthRefreshTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOAuthRefreshTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OAuthRefreshToken model
   */
  readonly fields: OAuthRefreshTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OAuthRefreshToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OAuthRefreshTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends OAuthClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OAuthClientDefaultArgs<ExtArgs>>): Prisma__OAuthClientClient<$Result.GetResult<Prisma.$OAuthClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OAuthRefreshToken model
   */
  interface OAuthRefreshTokenFieldRefs {
    readonly id: FieldRef<"OAuthRefreshToken", 'Int'>
    readonly refreshToken: FieldRef<"OAuthRefreshToken", 'String'>
    readonly expiresAt: FieldRef<"OAuthRefreshToken", 'DateTime'>
    readonly scope: FieldRef<"OAuthRefreshToken", 'String'>
    readonly clientId: FieldRef<"OAuthRefreshToken", 'Int'>
    readonly userId: FieldRef<"OAuthRefreshToken", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * OAuthRefreshToken findUnique
   */
  export type OAuthRefreshTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthRefreshToken
     */
    select?: OAuthRefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthRefreshToken
     */
    omit?: OAuthRefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthRefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which OAuthRefreshToken to fetch.
     */
    where: OAuthRefreshTokenWhereUniqueInput
  }

  /**
   * OAuthRefreshToken findUniqueOrThrow
   */
  export type OAuthRefreshTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthRefreshToken
     */
    select?: OAuthRefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthRefreshToken
     */
    omit?: OAuthRefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthRefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which OAuthRefreshToken to fetch.
     */
    where: OAuthRefreshTokenWhereUniqueInput
  }

  /**
   * OAuthRefreshToken findFirst
   */
  export type OAuthRefreshTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthRefreshToken
     */
    select?: OAuthRefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthRefreshToken
     */
    omit?: OAuthRefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthRefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which OAuthRefreshToken to fetch.
     */
    where?: OAuthRefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OAuthRefreshTokens to fetch.
     */
    orderBy?: OAuthRefreshTokenOrderByWithRelationInput | OAuthRefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OAuthRefreshTokens.
     */
    cursor?: OAuthRefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OAuthRefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OAuthRefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OAuthRefreshTokens.
     */
    distinct?: OAuthRefreshTokenScalarFieldEnum | OAuthRefreshTokenScalarFieldEnum[]
  }

  /**
   * OAuthRefreshToken findFirstOrThrow
   */
  export type OAuthRefreshTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthRefreshToken
     */
    select?: OAuthRefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthRefreshToken
     */
    omit?: OAuthRefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthRefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which OAuthRefreshToken to fetch.
     */
    where?: OAuthRefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OAuthRefreshTokens to fetch.
     */
    orderBy?: OAuthRefreshTokenOrderByWithRelationInput | OAuthRefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OAuthRefreshTokens.
     */
    cursor?: OAuthRefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OAuthRefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OAuthRefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OAuthRefreshTokens.
     */
    distinct?: OAuthRefreshTokenScalarFieldEnum | OAuthRefreshTokenScalarFieldEnum[]
  }

  /**
   * OAuthRefreshToken findMany
   */
  export type OAuthRefreshTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthRefreshToken
     */
    select?: OAuthRefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthRefreshToken
     */
    omit?: OAuthRefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthRefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which OAuthRefreshTokens to fetch.
     */
    where?: OAuthRefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OAuthRefreshTokens to fetch.
     */
    orderBy?: OAuthRefreshTokenOrderByWithRelationInput | OAuthRefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OAuthRefreshTokens.
     */
    cursor?: OAuthRefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OAuthRefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OAuthRefreshTokens.
     */
    skip?: number
    distinct?: OAuthRefreshTokenScalarFieldEnum | OAuthRefreshTokenScalarFieldEnum[]
  }

  /**
   * OAuthRefreshToken create
   */
  export type OAuthRefreshTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthRefreshToken
     */
    select?: OAuthRefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthRefreshToken
     */
    omit?: OAuthRefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthRefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a OAuthRefreshToken.
     */
    data: XOR<OAuthRefreshTokenCreateInput, OAuthRefreshTokenUncheckedCreateInput>
  }

  /**
   * OAuthRefreshToken createMany
   */
  export type OAuthRefreshTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OAuthRefreshTokens.
     */
    data: OAuthRefreshTokenCreateManyInput | OAuthRefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OAuthRefreshToken createManyAndReturn
   */
  export type OAuthRefreshTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthRefreshToken
     */
    select?: OAuthRefreshTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthRefreshToken
     */
    omit?: OAuthRefreshTokenOmit<ExtArgs> | null
    /**
     * The data used to create many OAuthRefreshTokens.
     */
    data: OAuthRefreshTokenCreateManyInput | OAuthRefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthRefreshTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OAuthRefreshToken update
   */
  export type OAuthRefreshTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthRefreshToken
     */
    select?: OAuthRefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthRefreshToken
     */
    omit?: OAuthRefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthRefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a OAuthRefreshToken.
     */
    data: XOR<OAuthRefreshTokenUpdateInput, OAuthRefreshTokenUncheckedUpdateInput>
    /**
     * Choose, which OAuthRefreshToken to update.
     */
    where: OAuthRefreshTokenWhereUniqueInput
  }

  /**
   * OAuthRefreshToken updateMany
   */
  export type OAuthRefreshTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OAuthRefreshTokens.
     */
    data: XOR<OAuthRefreshTokenUpdateManyMutationInput, OAuthRefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which OAuthRefreshTokens to update
     */
    where?: OAuthRefreshTokenWhereInput
  }

  /**
   * OAuthRefreshToken upsert
   */
  export type OAuthRefreshTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthRefreshToken
     */
    select?: OAuthRefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthRefreshToken
     */
    omit?: OAuthRefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthRefreshTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the OAuthRefreshToken to update in case it exists.
     */
    where: OAuthRefreshTokenWhereUniqueInput
    /**
     * In case the OAuthRefreshToken found by the `where` argument doesn't exist, create a new OAuthRefreshToken with this data.
     */
    create: XOR<OAuthRefreshTokenCreateInput, OAuthRefreshTokenUncheckedCreateInput>
    /**
     * In case the OAuthRefreshToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OAuthRefreshTokenUpdateInput, OAuthRefreshTokenUncheckedUpdateInput>
  }

  /**
   * OAuthRefreshToken delete
   */
  export type OAuthRefreshTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthRefreshToken
     */
    select?: OAuthRefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthRefreshToken
     */
    omit?: OAuthRefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthRefreshTokenInclude<ExtArgs> | null
    /**
     * Filter which OAuthRefreshToken to delete.
     */
    where: OAuthRefreshTokenWhereUniqueInput
  }

  /**
   * OAuthRefreshToken deleteMany
   */
  export type OAuthRefreshTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OAuthRefreshTokens to delete
     */
    where?: OAuthRefreshTokenWhereInput
  }

  /**
   * OAuthRefreshToken without action
   */
  export type OAuthRefreshTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthRefreshToken
     */
    select?: OAuthRefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuthRefreshToken
     */
    omit?: OAuthRefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthRefreshTokenInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    username: 'username',
    password: 'password',
    bio: 'bio'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    published: 'published',
    authorId: 'authorId'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const OAuthClientScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    clientSecret: 'clientSecret',
    redirectUris: 'redirectUris',
    grants: 'grants',
    userId: 'userId'
  };

  export type OAuthClientScalarFieldEnum = (typeof OAuthClientScalarFieldEnum)[keyof typeof OAuthClientScalarFieldEnum]


  export const OAuthAuthorizationCodeScalarFieldEnum: {
    id: 'id',
    code: 'code',
    expiresAt: 'expiresAt',
    redirectUri: 'redirectUri',
    scope: 'scope',
    clientId: 'clientId',
    userId: 'userId'
  };

  export type OAuthAuthorizationCodeScalarFieldEnum = (typeof OAuthAuthorizationCodeScalarFieldEnum)[keyof typeof OAuthAuthorizationCodeScalarFieldEnum]


  export const OAuthAccessTokenScalarFieldEnum: {
    id: 'id',
    accessToken: 'accessToken',
    expiresAt: 'expiresAt',
    scope: 'scope',
    clientId: 'clientId',
    userId: 'userId'
  };

  export type OAuthAccessTokenScalarFieldEnum = (typeof OAuthAccessTokenScalarFieldEnum)[keyof typeof OAuthAccessTokenScalarFieldEnum]


  export const OAuthRefreshTokenScalarFieldEnum: {
    id: 'id',
    refreshToken: 'refreshToken',
    expiresAt: 'expiresAt',
    scope: 'scope',
    clientId: 'clientId',
    userId: 'userId'
  };

  export type OAuthRefreshTokenScalarFieldEnum = (typeof OAuthRefreshTokenScalarFieldEnum)[keyof typeof OAuthRefreshTokenScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    username?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    posts?: PostListRelationFilter
    oauthClients?: OAuthClientListRelationFilter
    authCodes?: OAuthAuthorizationCodeListRelationFilter
    accessTokens?: OAuthAccessTokenListRelationFilter
    refreshTokens?: OAuthRefreshTokenListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    posts?: PostOrderByRelationAggregateInput
    oauthClients?: OAuthClientOrderByRelationAggregateInput
    authCodes?: OAuthAuthorizationCodeOrderByRelationAggregateInput
    accessTokens?: OAuthAccessTokenOrderByRelationAggregateInput
    refreshTokens?: OAuthRefreshTokenOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    posts?: PostListRelationFilter
    oauthClients?: OAuthClientListRelationFilter
    authCodes?: OAuthAuthorizationCodeListRelationFilter
    accessTokens?: OAuthAccessTokenListRelationFilter
    refreshTokens?: OAuthRefreshTokenListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    username?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: IntFilter<"Post"> | number
    title?: StringFilter<"Post"> | string
    content?: StringNullableFilter<"Post"> | string | null
    published?: BoolFilter<"Post"> | boolean
    authorId?: IntNullableFilter<"Post"> | number | null
    author?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrderInput | SortOrder
    published?: SortOrder
    authorId?: SortOrderInput | SortOrder
    author?: UserOrderByWithRelationInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    title?: StringFilter<"Post"> | string
    content?: StringNullableFilter<"Post"> | string | null
    published?: BoolFilter<"Post"> | boolean
    authorId?: IntNullableFilter<"Post"> | number | null
    author?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrderInput | SortOrder
    published?: SortOrder
    authorId?: SortOrderInput | SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Post"> | number
    title?: StringWithAggregatesFilter<"Post"> | string
    content?: StringNullableWithAggregatesFilter<"Post"> | string | null
    published?: BoolWithAggregatesFilter<"Post"> | boolean
    authorId?: IntNullableWithAggregatesFilter<"Post"> | number | null
  }

  export type OAuthClientWhereInput = {
    AND?: OAuthClientWhereInput | OAuthClientWhereInput[]
    OR?: OAuthClientWhereInput[]
    NOT?: OAuthClientWhereInput | OAuthClientWhereInput[]
    id?: IntFilter<"OAuthClient"> | number
    clientId?: StringFilter<"OAuthClient"> | string
    clientSecret?: StringFilter<"OAuthClient"> | string
    redirectUris?: StringNullableListFilter<"OAuthClient">
    grants?: StringNullableListFilter<"OAuthClient">
    userId?: IntNullableFilter<"OAuthClient"> | number | null
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    accessTokens?: OAuthAccessTokenListRelationFilter
    refreshTokens?: OAuthRefreshTokenListRelationFilter
    authorizationCodes?: OAuthAuthorizationCodeListRelationFilter
  }

  export type OAuthClientOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrder
    clientSecret?: SortOrder
    redirectUris?: SortOrder
    grants?: SortOrder
    userId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    accessTokens?: OAuthAccessTokenOrderByRelationAggregateInput
    refreshTokens?: OAuthRefreshTokenOrderByRelationAggregateInput
    authorizationCodes?: OAuthAuthorizationCodeOrderByRelationAggregateInput
  }

  export type OAuthClientWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    clientId?: string
    AND?: OAuthClientWhereInput | OAuthClientWhereInput[]
    OR?: OAuthClientWhereInput[]
    NOT?: OAuthClientWhereInput | OAuthClientWhereInput[]
    clientSecret?: StringFilter<"OAuthClient"> | string
    redirectUris?: StringNullableListFilter<"OAuthClient">
    grants?: StringNullableListFilter<"OAuthClient">
    userId?: IntNullableFilter<"OAuthClient"> | number | null
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    accessTokens?: OAuthAccessTokenListRelationFilter
    refreshTokens?: OAuthRefreshTokenListRelationFilter
    authorizationCodes?: OAuthAuthorizationCodeListRelationFilter
  }, "id" | "clientId">

  export type OAuthClientOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrder
    clientSecret?: SortOrder
    redirectUris?: SortOrder
    grants?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: OAuthClientCountOrderByAggregateInput
    _avg?: OAuthClientAvgOrderByAggregateInput
    _max?: OAuthClientMaxOrderByAggregateInput
    _min?: OAuthClientMinOrderByAggregateInput
    _sum?: OAuthClientSumOrderByAggregateInput
  }

  export type OAuthClientScalarWhereWithAggregatesInput = {
    AND?: OAuthClientScalarWhereWithAggregatesInput | OAuthClientScalarWhereWithAggregatesInput[]
    OR?: OAuthClientScalarWhereWithAggregatesInput[]
    NOT?: OAuthClientScalarWhereWithAggregatesInput | OAuthClientScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OAuthClient"> | number
    clientId?: StringWithAggregatesFilter<"OAuthClient"> | string
    clientSecret?: StringWithAggregatesFilter<"OAuthClient"> | string
    redirectUris?: StringNullableListFilter<"OAuthClient">
    grants?: StringNullableListFilter<"OAuthClient">
    userId?: IntNullableWithAggregatesFilter<"OAuthClient"> | number | null
  }

  export type OAuthAuthorizationCodeWhereInput = {
    AND?: OAuthAuthorizationCodeWhereInput | OAuthAuthorizationCodeWhereInput[]
    OR?: OAuthAuthorizationCodeWhereInput[]
    NOT?: OAuthAuthorizationCodeWhereInput | OAuthAuthorizationCodeWhereInput[]
    id?: IntFilter<"OAuthAuthorizationCode"> | number
    code?: StringFilter<"OAuthAuthorizationCode"> | string
    expiresAt?: DateTimeFilter<"OAuthAuthorizationCode"> | Date | string
    redirectUri?: StringFilter<"OAuthAuthorizationCode"> | string
    scope?: StringNullableFilter<"OAuthAuthorizationCode"> | string | null
    clientId?: IntFilter<"OAuthAuthorizationCode"> | number
    userId?: IntFilter<"OAuthAuthorizationCode"> | number
    client?: XOR<OAuthClientRelationFilter, OAuthClientWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type OAuthAuthorizationCodeOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    redirectUri?: SortOrder
    scope?: SortOrderInput | SortOrder
    clientId?: SortOrder
    userId?: SortOrder
    client?: OAuthClientOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type OAuthAuthorizationCodeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    AND?: OAuthAuthorizationCodeWhereInput | OAuthAuthorizationCodeWhereInput[]
    OR?: OAuthAuthorizationCodeWhereInput[]
    NOT?: OAuthAuthorizationCodeWhereInput | OAuthAuthorizationCodeWhereInput[]
    expiresAt?: DateTimeFilter<"OAuthAuthorizationCode"> | Date | string
    redirectUri?: StringFilter<"OAuthAuthorizationCode"> | string
    scope?: StringNullableFilter<"OAuthAuthorizationCode"> | string | null
    clientId?: IntFilter<"OAuthAuthorizationCode"> | number
    userId?: IntFilter<"OAuthAuthorizationCode"> | number
    client?: XOR<OAuthClientRelationFilter, OAuthClientWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "code">

  export type OAuthAuthorizationCodeOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    redirectUri?: SortOrder
    scope?: SortOrderInput | SortOrder
    clientId?: SortOrder
    userId?: SortOrder
    _count?: OAuthAuthorizationCodeCountOrderByAggregateInput
    _avg?: OAuthAuthorizationCodeAvgOrderByAggregateInput
    _max?: OAuthAuthorizationCodeMaxOrderByAggregateInput
    _min?: OAuthAuthorizationCodeMinOrderByAggregateInput
    _sum?: OAuthAuthorizationCodeSumOrderByAggregateInput
  }

  export type OAuthAuthorizationCodeScalarWhereWithAggregatesInput = {
    AND?: OAuthAuthorizationCodeScalarWhereWithAggregatesInput | OAuthAuthorizationCodeScalarWhereWithAggregatesInput[]
    OR?: OAuthAuthorizationCodeScalarWhereWithAggregatesInput[]
    NOT?: OAuthAuthorizationCodeScalarWhereWithAggregatesInput | OAuthAuthorizationCodeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OAuthAuthorizationCode"> | number
    code?: StringWithAggregatesFilter<"OAuthAuthorizationCode"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"OAuthAuthorizationCode"> | Date | string
    redirectUri?: StringWithAggregatesFilter<"OAuthAuthorizationCode"> | string
    scope?: StringNullableWithAggregatesFilter<"OAuthAuthorizationCode"> | string | null
    clientId?: IntWithAggregatesFilter<"OAuthAuthorizationCode"> | number
    userId?: IntWithAggregatesFilter<"OAuthAuthorizationCode"> | number
  }

  export type OAuthAccessTokenWhereInput = {
    AND?: OAuthAccessTokenWhereInput | OAuthAccessTokenWhereInput[]
    OR?: OAuthAccessTokenWhereInput[]
    NOT?: OAuthAccessTokenWhereInput | OAuthAccessTokenWhereInput[]
    id?: IntFilter<"OAuthAccessToken"> | number
    accessToken?: StringFilter<"OAuthAccessToken"> | string
    expiresAt?: DateTimeFilter<"OAuthAccessToken"> | Date | string
    scope?: StringNullableFilter<"OAuthAccessToken"> | string | null
    clientId?: IntFilter<"OAuthAccessToken"> | number
    userId?: IntFilter<"OAuthAccessToken"> | number
    client?: XOR<OAuthClientRelationFilter, OAuthClientWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type OAuthAccessTokenOrderByWithRelationInput = {
    id?: SortOrder
    accessToken?: SortOrder
    expiresAt?: SortOrder
    scope?: SortOrderInput | SortOrder
    clientId?: SortOrder
    userId?: SortOrder
    client?: OAuthClientOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type OAuthAccessTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    accessToken?: string
    AND?: OAuthAccessTokenWhereInput | OAuthAccessTokenWhereInput[]
    OR?: OAuthAccessTokenWhereInput[]
    NOT?: OAuthAccessTokenWhereInput | OAuthAccessTokenWhereInput[]
    expiresAt?: DateTimeFilter<"OAuthAccessToken"> | Date | string
    scope?: StringNullableFilter<"OAuthAccessToken"> | string | null
    clientId?: IntFilter<"OAuthAccessToken"> | number
    userId?: IntFilter<"OAuthAccessToken"> | number
    client?: XOR<OAuthClientRelationFilter, OAuthClientWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "accessToken">

  export type OAuthAccessTokenOrderByWithAggregationInput = {
    id?: SortOrder
    accessToken?: SortOrder
    expiresAt?: SortOrder
    scope?: SortOrderInput | SortOrder
    clientId?: SortOrder
    userId?: SortOrder
    _count?: OAuthAccessTokenCountOrderByAggregateInput
    _avg?: OAuthAccessTokenAvgOrderByAggregateInput
    _max?: OAuthAccessTokenMaxOrderByAggregateInput
    _min?: OAuthAccessTokenMinOrderByAggregateInput
    _sum?: OAuthAccessTokenSumOrderByAggregateInput
  }

  export type OAuthAccessTokenScalarWhereWithAggregatesInput = {
    AND?: OAuthAccessTokenScalarWhereWithAggregatesInput | OAuthAccessTokenScalarWhereWithAggregatesInput[]
    OR?: OAuthAccessTokenScalarWhereWithAggregatesInput[]
    NOT?: OAuthAccessTokenScalarWhereWithAggregatesInput | OAuthAccessTokenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OAuthAccessToken"> | number
    accessToken?: StringWithAggregatesFilter<"OAuthAccessToken"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"OAuthAccessToken"> | Date | string
    scope?: StringNullableWithAggregatesFilter<"OAuthAccessToken"> | string | null
    clientId?: IntWithAggregatesFilter<"OAuthAccessToken"> | number
    userId?: IntWithAggregatesFilter<"OAuthAccessToken"> | number
  }

  export type OAuthRefreshTokenWhereInput = {
    AND?: OAuthRefreshTokenWhereInput | OAuthRefreshTokenWhereInput[]
    OR?: OAuthRefreshTokenWhereInput[]
    NOT?: OAuthRefreshTokenWhereInput | OAuthRefreshTokenWhereInput[]
    id?: IntFilter<"OAuthRefreshToken"> | number
    refreshToken?: StringFilter<"OAuthRefreshToken"> | string
    expiresAt?: DateTimeFilter<"OAuthRefreshToken"> | Date | string
    scope?: StringNullableFilter<"OAuthRefreshToken"> | string | null
    clientId?: IntFilter<"OAuthRefreshToken"> | number
    userId?: IntFilter<"OAuthRefreshToken"> | number
    client?: XOR<OAuthClientRelationFilter, OAuthClientWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type OAuthRefreshTokenOrderByWithRelationInput = {
    id?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
    scope?: SortOrderInput | SortOrder
    clientId?: SortOrder
    userId?: SortOrder
    client?: OAuthClientOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type OAuthRefreshTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    refreshToken?: string
    AND?: OAuthRefreshTokenWhereInput | OAuthRefreshTokenWhereInput[]
    OR?: OAuthRefreshTokenWhereInput[]
    NOT?: OAuthRefreshTokenWhereInput | OAuthRefreshTokenWhereInput[]
    expiresAt?: DateTimeFilter<"OAuthRefreshToken"> | Date | string
    scope?: StringNullableFilter<"OAuthRefreshToken"> | string | null
    clientId?: IntFilter<"OAuthRefreshToken"> | number
    userId?: IntFilter<"OAuthRefreshToken"> | number
    client?: XOR<OAuthClientRelationFilter, OAuthClientWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "refreshToken">

  export type OAuthRefreshTokenOrderByWithAggregationInput = {
    id?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
    scope?: SortOrderInput | SortOrder
    clientId?: SortOrder
    userId?: SortOrder
    _count?: OAuthRefreshTokenCountOrderByAggregateInput
    _avg?: OAuthRefreshTokenAvgOrderByAggregateInput
    _max?: OAuthRefreshTokenMaxOrderByAggregateInput
    _min?: OAuthRefreshTokenMinOrderByAggregateInput
    _sum?: OAuthRefreshTokenSumOrderByAggregateInput
  }

  export type OAuthRefreshTokenScalarWhereWithAggregatesInput = {
    AND?: OAuthRefreshTokenScalarWhereWithAggregatesInput | OAuthRefreshTokenScalarWhereWithAggregatesInput[]
    OR?: OAuthRefreshTokenScalarWhereWithAggregatesInput[]
    NOT?: OAuthRefreshTokenScalarWhereWithAggregatesInput | OAuthRefreshTokenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OAuthRefreshToken"> | number
    refreshToken?: StringWithAggregatesFilter<"OAuthRefreshToken"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"OAuthRefreshToken"> | Date | string
    scope?: StringNullableWithAggregatesFilter<"OAuthRefreshToken"> | string | null
    clientId?: IntWithAggregatesFilter<"OAuthRefreshToken"> | number
    userId?: IntWithAggregatesFilter<"OAuthRefreshToken"> | number
  }

  export type UserCreateInput = {
    email: string
    username?: string | null
    password?: string | null
    bio?: string | null
    posts?: PostCreateNestedManyWithoutAuthorInput
    oauthClients?: OAuthClientCreateNestedManyWithoutUserInput
    authCodes?: OAuthAuthorizationCodeCreateNestedManyWithoutUserInput
    accessTokens?: OAuthAccessTokenCreateNestedManyWithoutUserInput
    refreshTokens?: OAuthRefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    username?: string | null
    password?: string | null
    bio?: string | null
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    oauthClients?: OAuthClientUncheckedCreateNestedManyWithoutUserInput
    authCodes?: OAuthAuthorizationCodeUncheckedCreateNestedManyWithoutUserInput
    accessTokens?: OAuthAccessTokenUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: OAuthRefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUpdateManyWithoutAuthorNestedInput
    oauthClients?: OAuthClientUpdateManyWithoutUserNestedInput
    authCodes?: OAuthAuthorizationCodeUpdateManyWithoutUserNestedInput
    accessTokens?: OAuthAccessTokenUpdateManyWithoutUserNestedInput
    refreshTokens?: OAuthRefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    oauthClients?: OAuthClientUncheckedUpdateManyWithoutUserNestedInput
    authCodes?: OAuthAuthorizationCodeUncheckedUpdateManyWithoutUserNestedInput
    accessTokens?: OAuthAccessTokenUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: OAuthRefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    username?: string | null
    password?: string | null
    bio?: string | null
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostCreateInput = {
    title: string
    content?: string | null
    published?: boolean
    author?: UserCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateInput = {
    id?: number
    title: string
    content?: string | null
    published?: boolean
    authorId?: number | null
  }

  export type PostUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    author?: UserUpdateOneWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    authorId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PostCreateManyInput = {
    id?: number
    title: string
    content?: string | null
    published?: boolean
    authorId?: number | null
  }

  export type PostUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    authorId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OAuthClientCreateInput = {
    clientId: string
    clientSecret: string
    redirectUris?: OAuthClientCreateredirectUrisInput | string[]
    grants?: OAuthClientCreategrantsInput | string[]
    user?: UserCreateNestedOneWithoutOauthClientsInput
    accessTokens?: OAuthAccessTokenCreateNestedManyWithoutClientInput
    refreshTokens?: OAuthRefreshTokenCreateNestedManyWithoutClientInput
    authorizationCodes?: OAuthAuthorizationCodeCreateNestedManyWithoutClientInput
  }

  export type OAuthClientUncheckedCreateInput = {
    id?: number
    clientId: string
    clientSecret: string
    redirectUris?: OAuthClientCreateredirectUrisInput | string[]
    grants?: OAuthClientCreategrantsInput | string[]
    userId?: number | null
    accessTokens?: OAuthAccessTokenUncheckedCreateNestedManyWithoutClientInput
    refreshTokens?: OAuthRefreshTokenUncheckedCreateNestedManyWithoutClientInput
    authorizationCodes?: OAuthAuthorizationCodeUncheckedCreateNestedManyWithoutClientInput
  }

  export type OAuthClientUpdateInput = {
    clientId?: StringFieldUpdateOperationsInput | string
    clientSecret?: StringFieldUpdateOperationsInput | string
    redirectUris?: OAuthClientUpdateredirectUrisInput | string[]
    grants?: OAuthClientUpdategrantsInput | string[]
    user?: UserUpdateOneWithoutOauthClientsNestedInput
    accessTokens?: OAuthAccessTokenUpdateManyWithoutClientNestedInput
    refreshTokens?: OAuthRefreshTokenUpdateManyWithoutClientNestedInput
    authorizationCodes?: OAuthAuthorizationCodeUpdateManyWithoutClientNestedInput
  }

  export type OAuthClientUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: StringFieldUpdateOperationsInput | string
    clientSecret?: StringFieldUpdateOperationsInput | string
    redirectUris?: OAuthClientUpdateredirectUrisInput | string[]
    grants?: OAuthClientUpdategrantsInput | string[]
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    accessTokens?: OAuthAccessTokenUncheckedUpdateManyWithoutClientNestedInput
    refreshTokens?: OAuthRefreshTokenUncheckedUpdateManyWithoutClientNestedInput
    authorizationCodes?: OAuthAuthorizationCodeUncheckedUpdateManyWithoutClientNestedInput
  }

  export type OAuthClientCreateManyInput = {
    id?: number
    clientId: string
    clientSecret: string
    redirectUris?: OAuthClientCreateredirectUrisInput | string[]
    grants?: OAuthClientCreategrantsInput | string[]
    userId?: number | null
  }

  export type OAuthClientUpdateManyMutationInput = {
    clientId?: StringFieldUpdateOperationsInput | string
    clientSecret?: StringFieldUpdateOperationsInput | string
    redirectUris?: OAuthClientUpdateredirectUrisInput | string[]
    grants?: OAuthClientUpdategrantsInput | string[]
  }

  export type OAuthClientUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: StringFieldUpdateOperationsInput | string
    clientSecret?: StringFieldUpdateOperationsInput | string
    redirectUris?: OAuthClientUpdateredirectUrisInput | string[]
    grants?: OAuthClientUpdategrantsInput | string[]
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OAuthAuthorizationCodeCreateInput = {
    code: string
    expiresAt: Date | string
    redirectUri: string
    scope?: string | null
    client: OAuthClientCreateNestedOneWithoutAuthorizationCodesInput
    user: UserCreateNestedOneWithoutAuthCodesInput
  }

  export type OAuthAuthorizationCodeUncheckedCreateInput = {
    id?: number
    code: string
    expiresAt: Date | string
    redirectUri: string
    scope?: string | null
    clientId: number
    userId: number
  }

  export type OAuthAuthorizationCodeUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    redirectUri?: StringFieldUpdateOperationsInput | string
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    client?: OAuthClientUpdateOneRequiredWithoutAuthorizationCodesNestedInput
    user?: UserUpdateOneRequiredWithoutAuthCodesNestedInput
  }

  export type OAuthAuthorizationCodeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    redirectUri?: StringFieldUpdateOperationsInput | string
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type OAuthAuthorizationCodeCreateManyInput = {
    id?: number
    code: string
    expiresAt: Date | string
    redirectUri: string
    scope?: string | null
    clientId: number
    userId: number
  }

  export type OAuthAuthorizationCodeUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    redirectUri?: StringFieldUpdateOperationsInput | string
    scope?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OAuthAuthorizationCodeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    redirectUri?: StringFieldUpdateOperationsInput | string
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type OAuthAccessTokenCreateInput = {
    accessToken: string
    expiresAt: Date | string
    scope?: string | null
    client: OAuthClientCreateNestedOneWithoutAccessTokensInput
    user: UserCreateNestedOneWithoutAccessTokensInput
  }

  export type OAuthAccessTokenUncheckedCreateInput = {
    id?: number
    accessToken: string
    expiresAt: Date | string
    scope?: string | null
    clientId: number
    userId: number
  }

  export type OAuthAccessTokenUpdateInput = {
    accessToken?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    client?: OAuthClientUpdateOneRequiredWithoutAccessTokensNestedInput
    user?: UserUpdateOneRequiredWithoutAccessTokensNestedInput
  }

  export type OAuthAccessTokenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    accessToken?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type OAuthAccessTokenCreateManyInput = {
    id?: number
    accessToken: string
    expiresAt: Date | string
    scope?: string | null
    clientId: number
    userId: number
  }

  export type OAuthAccessTokenUpdateManyMutationInput = {
    accessToken?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scope?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OAuthAccessTokenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    accessToken?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type OAuthRefreshTokenCreateInput = {
    refreshToken: string
    expiresAt: Date | string
    scope?: string | null
    client: OAuthClientCreateNestedOneWithoutRefreshTokensInput
    user: UserCreateNestedOneWithoutRefreshTokensInput
  }

  export type OAuthRefreshTokenUncheckedCreateInput = {
    id?: number
    refreshToken: string
    expiresAt: Date | string
    scope?: string | null
    clientId: number
    userId: number
  }

  export type OAuthRefreshTokenUpdateInput = {
    refreshToken?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    client?: OAuthClientUpdateOneRequiredWithoutRefreshTokensNestedInput
    user?: UserUpdateOneRequiredWithoutRefreshTokensNestedInput
  }

  export type OAuthRefreshTokenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    refreshToken?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type OAuthRefreshTokenCreateManyInput = {
    id?: number
    refreshToken: string
    expiresAt: Date | string
    scope?: string | null
    clientId: number
    userId: number
  }

  export type OAuthRefreshTokenUpdateManyMutationInput = {
    refreshToken?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scope?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OAuthRefreshTokenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    refreshToken?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type OAuthClientListRelationFilter = {
    every?: OAuthClientWhereInput
    some?: OAuthClientWhereInput
    none?: OAuthClientWhereInput
  }

  export type OAuthAuthorizationCodeListRelationFilter = {
    every?: OAuthAuthorizationCodeWhereInput
    some?: OAuthAuthorizationCodeWhereInput
    none?: OAuthAuthorizationCodeWhereInput
  }

  export type OAuthAccessTokenListRelationFilter = {
    every?: OAuthAccessTokenWhereInput
    some?: OAuthAccessTokenWhereInput
    none?: OAuthAccessTokenWhereInput
  }

  export type OAuthRefreshTokenListRelationFilter = {
    every?: OAuthRefreshTokenWhereInput
    some?: OAuthRefreshTokenWhereInput
    none?: OAuthRefreshTokenWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OAuthClientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OAuthAuthorizationCodeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OAuthAccessTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OAuthRefreshTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    bio?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    bio?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    bio?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    published?: SortOrder
    authorId?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    published?: SortOrder
    authorId?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    published?: SortOrder
    authorId?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type OAuthClientCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    clientSecret?: SortOrder
    redirectUris?: SortOrder
    grants?: SortOrder
    userId?: SortOrder
  }

  export type OAuthClientAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type OAuthClientMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    clientSecret?: SortOrder
    userId?: SortOrder
  }

  export type OAuthClientMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    clientSecret?: SortOrder
    userId?: SortOrder
  }

  export type OAuthClientSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
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

  export type OAuthClientRelationFilter = {
    is?: OAuthClientWhereInput
    isNot?: OAuthClientWhereInput
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type OAuthAuthorizationCodeCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    redirectUri?: SortOrder
    scope?: SortOrder
    clientId?: SortOrder
    userId?: SortOrder
  }

  export type OAuthAuthorizationCodeAvgOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    userId?: SortOrder
  }

  export type OAuthAuthorizationCodeMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    redirectUri?: SortOrder
    scope?: SortOrder
    clientId?: SortOrder
    userId?: SortOrder
  }

  export type OAuthAuthorizationCodeMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    redirectUri?: SortOrder
    scope?: SortOrder
    clientId?: SortOrder
    userId?: SortOrder
  }

  export type OAuthAuthorizationCodeSumOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    userId?: SortOrder
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

  export type OAuthAccessTokenCountOrderByAggregateInput = {
    id?: SortOrder
    accessToken?: SortOrder
    expiresAt?: SortOrder
    scope?: SortOrder
    clientId?: SortOrder
    userId?: SortOrder
  }

  export type OAuthAccessTokenAvgOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    userId?: SortOrder
  }

  export type OAuthAccessTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    accessToken?: SortOrder
    expiresAt?: SortOrder
    scope?: SortOrder
    clientId?: SortOrder
    userId?: SortOrder
  }

  export type OAuthAccessTokenMinOrderByAggregateInput = {
    id?: SortOrder
    accessToken?: SortOrder
    expiresAt?: SortOrder
    scope?: SortOrder
    clientId?: SortOrder
    userId?: SortOrder
  }

  export type OAuthAccessTokenSumOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    userId?: SortOrder
  }

  export type OAuthRefreshTokenCountOrderByAggregateInput = {
    id?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
    scope?: SortOrder
    clientId?: SortOrder
    userId?: SortOrder
  }

  export type OAuthRefreshTokenAvgOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    userId?: SortOrder
  }

  export type OAuthRefreshTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
    scope?: SortOrder
    clientId?: SortOrder
    userId?: SortOrder
  }

  export type OAuthRefreshTokenMinOrderByAggregateInput = {
    id?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
    scope?: SortOrder
    clientId?: SortOrder
    userId?: SortOrder
  }

  export type OAuthRefreshTokenSumOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    userId?: SortOrder
  }

  export type PostCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type OAuthClientCreateNestedManyWithoutUserInput = {
    create?: XOR<OAuthClientCreateWithoutUserInput, OAuthClientUncheckedCreateWithoutUserInput> | OAuthClientCreateWithoutUserInput[] | OAuthClientUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OAuthClientCreateOrConnectWithoutUserInput | OAuthClientCreateOrConnectWithoutUserInput[]
    createMany?: OAuthClientCreateManyUserInputEnvelope
    connect?: OAuthClientWhereUniqueInput | OAuthClientWhereUniqueInput[]
  }

  export type OAuthAuthorizationCodeCreateNestedManyWithoutUserInput = {
    create?: XOR<OAuthAuthorizationCodeCreateWithoutUserInput, OAuthAuthorizationCodeUncheckedCreateWithoutUserInput> | OAuthAuthorizationCodeCreateWithoutUserInput[] | OAuthAuthorizationCodeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OAuthAuthorizationCodeCreateOrConnectWithoutUserInput | OAuthAuthorizationCodeCreateOrConnectWithoutUserInput[]
    createMany?: OAuthAuthorizationCodeCreateManyUserInputEnvelope
    connect?: OAuthAuthorizationCodeWhereUniqueInput | OAuthAuthorizationCodeWhereUniqueInput[]
  }

  export type OAuthAccessTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<OAuthAccessTokenCreateWithoutUserInput, OAuthAccessTokenUncheckedCreateWithoutUserInput> | OAuthAccessTokenCreateWithoutUserInput[] | OAuthAccessTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OAuthAccessTokenCreateOrConnectWithoutUserInput | OAuthAccessTokenCreateOrConnectWithoutUserInput[]
    createMany?: OAuthAccessTokenCreateManyUserInputEnvelope
    connect?: OAuthAccessTokenWhereUniqueInput | OAuthAccessTokenWhereUniqueInput[]
  }

  export type OAuthRefreshTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<OAuthRefreshTokenCreateWithoutUserInput, OAuthRefreshTokenUncheckedCreateWithoutUserInput> | OAuthRefreshTokenCreateWithoutUserInput[] | OAuthRefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OAuthRefreshTokenCreateOrConnectWithoutUserInput | OAuthRefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: OAuthRefreshTokenCreateManyUserInputEnvelope
    connect?: OAuthRefreshTokenWhereUniqueInput | OAuthRefreshTokenWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type OAuthClientUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OAuthClientCreateWithoutUserInput, OAuthClientUncheckedCreateWithoutUserInput> | OAuthClientCreateWithoutUserInput[] | OAuthClientUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OAuthClientCreateOrConnectWithoutUserInput | OAuthClientCreateOrConnectWithoutUserInput[]
    createMany?: OAuthClientCreateManyUserInputEnvelope
    connect?: OAuthClientWhereUniqueInput | OAuthClientWhereUniqueInput[]
  }

  export type OAuthAuthorizationCodeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OAuthAuthorizationCodeCreateWithoutUserInput, OAuthAuthorizationCodeUncheckedCreateWithoutUserInput> | OAuthAuthorizationCodeCreateWithoutUserInput[] | OAuthAuthorizationCodeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OAuthAuthorizationCodeCreateOrConnectWithoutUserInput | OAuthAuthorizationCodeCreateOrConnectWithoutUserInput[]
    createMany?: OAuthAuthorizationCodeCreateManyUserInputEnvelope
    connect?: OAuthAuthorizationCodeWhereUniqueInput | OAuthAuthorizationCodeWhereUniqueInput[]
  }

  export type OAuthAccessTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OAuthAccessTokenCreateWithoutUserInput, OAuthAccessTokenUncheckedCreateWithoutUserInput> | OAuthAccessTokenCreateWithoutUserInput[] | OAuthAccessTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OAuthAccessTokenCreateOrConnectWithoutUserInput | OAuthAccessTokenCreateOrConnectWithoutUserInput[]
    createMany?: OAuthAccessTokenCreateManyUserInputEnvelope
    connect?: OAuthAccessTokenWhereUniqueInput | OAuthAccessTokenWhereUniqueInput[]
  }

  export type OAuthRefreshTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OAuthRefreshTokenCreateWithoutUserInput, OAuthRefreshTokenUncheckedCreateWithoutUserInput> | OAuthRefreshTokenCreateWithoutUserInput[] | OAuthRefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OAuthRefreshTokenCreateOrConnectWithoutUserInput | OAuthRefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: OAuthRefreshTokenCreateManyUserInputEnvelope
    connect?: OAuthRefreshTokenWhereUniqueInput | OAuthRefreshTokenWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type PostUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput | PostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutAuthorInput | PostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PostUpdateManyWithWhereWithoutAuthorInput | PostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type OAuthClientUpdateManyWithoutUserNestedInput = {
    create?: XOR<OAuthClientCreateWithoutUserInput, OAuthClientUncheckedCreateWithoutUserInput> | OAuthClientCreateWithoutUserInput[] | OAuthClientUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OAuthClientCreateOrConnectWithoutUserInput | OAuthClientCreateOrConnectWithoutUserInput[]
    upsert?: OAuthClientUpsertWithWhereUniqueWithoutUserInput | OAuthClientUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OAuthClientCreateManyUserInputEnvelope
    set?: OAuthClientWhereUniqueInput | OAuthClientWhereUniqueInput[]
    disconnect?: OAuthClientWhereUniqueInput | OAuthClientWhereUniqueInput[]
    delete?: OAuthClientWhereUniqueInput | OAuthClientWhereUniqueInput[]
    connect?: OAuthClientWhereUniqueInput | OAuthClientWhereUniqueInput[]
    update?: OAuthClientUpdateWithWhereUniqueWithoutUserInput | OAuthClientUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OAuthClientUpdateManyWithWhereWithoutUserInput | OAuthClientUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OAuthClientScalarWhereInput | OAuthClientScalarWhereInput[]
  }

  export type OAuthAuthorizationCodeUpdateManyWithoutUserNestedInput = {
    create?: XOR<OAuthAuthorizationCodeCreateWithoutUserInput, OAuthAuthorizationCodeUncheckedCreateWithoutUserInput> | OAuthAuthorizationCodeCreateWithoutUserInput[] | OAuthAuthorizationCodeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OAuthAuthorizationCodeCreateOrConnectWithoutUserInput | OAuthAuthorizationCodeCreateOrConnectWithoutUserInput[]
    upsert?: OAuthAuthorizationCodeUpsertWithWhereUniqueWithoutUserInput | OAuthAuthorizationCodeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OAuthAuthorizationCodeCreateManyUserInputEnvelope
    set?: OAuthAuthorizationCodeWhereUniqueInput | OAuthAuthorizationCodeWhereUniqueInput[]
    disconnect?: OAuthAuthorizationCodeWhereUniqueInput | OAuthAuthorizationCodeWhereUniqueInput[]
    delete?: OAuthAuthorizationCodeWhereUniqueInput | OAuthAuthorizationCodeWhereUniqueInput[]
    connect?: OAuthAuthorizationCodeWhereUniqueInput | OAuthAuthorizationCodeWhereUniqueInput[]
    update?: OAuthAuthorizationCodeUpdateWithWhereUniqueWithoutUserInput | OAuthAuthorizationCodeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OAuthAuthorizationCodeUpdateManyWithWhereWithoutUserInput | OAuthAuthorizationCodeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OAuthAuthorizationCodeScalarWhereInput | OAuthAuthorizationCodeScalarWhereInput[]
  }

  export type OAuthAccessTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<OAuthAccessTokenCreateWithoutUserInput, OAuthAccessTokenUncheckedCreateWithoutUserInput> | OAuthAccessTokenCreateWithoutUserInput[] | OAuthAccessTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OAuthAccessTokenCreateOrConnectWithoutUserInput | OAuthAccessTokenCreateOrConnectWithoutUserInput[]
    upsert?: OAuthAccessTokenUpsertWithWhereUniqueWithoutUserInput | OAuthAccessTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OAuthAccessTokenCreateManyUserInputEnvelope
    set?: OAuthAccessTokenWhereUniqueInput | OAuthAccessTokenWhereUniqueInput[]
    disconnect?: OAuthAccessTokenWhereUniqueInput | OAuthAccessTokenWhereUniqueInput[]
    delete?: OAuthAccessTokenWhereUniqueInput | OAuthAccessTokenWhereUniqueInput[]
    connect?: OAuthAccessTokenWhereUniqueInput | OAuthAccessTokenWhereUniqueInput[]
    update?: OAuthAccessTokenUpdateWithWhereUniqueWithoutUserInput | OAuthAccessTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OAuthAccessTokenUpdateManyWithWhereWithoutUserInput | OAuthAccessTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OAuthAccessTokenScalarWhereInput | OAuthAccessTokenScalarWhereInput[]
  }

  export type OAuthRefreshTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<OAuthRefreshTokenCreateWithoutUserInput, OAuthRefreshTokenUncheckedCreateWithoutUserInput> | OAuthRefreshTokenCreateWithoutUserInput[] | OAuthRefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OAuthRefreshTokenCreateOrConnectWithoutUserInput | OAuthRefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: OAuthRefreshTokenUpsertWithWhereUniqueWithoutUserInput | OAuthRefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OAuthRefreshTokenCreateManyUserInputEnvelope
    set?: OAuthRefreshTokenWhereUniqueInput | OAuthRefreshTokenWhereUniqueInput[]
    disconnect?: OAuthRefreshTokenWhereUniqueInput | OAuthRefreshTokenWhereUniqueInput[]
    delete?: OAuthRefreshTokenWhereUniqueInput | OAuthRefreshTokenWhereUniqueInput[]
    connect?: OAuthRefreshTokenWhereUniqueInput | OAuthRefreshTokenWhereUniqueInput[]
    update?: OAuthRefreshTokenUpdateWithWhereUniqueWithoutUserInput | OAuthRefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OAuthRefreshTokenUpdateManyWithWhereWithoutUserInput | OAuthRefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OAuthRefreshTokenScalarWhereInput | OAuthRefreshTokenScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PostUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput | PostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutAuthorInput | PostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PostUpdateManyWithWhereWithoutAuthorInput | PostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type OAuthClientUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OAuthClientCreateWithoutUserInput, OAuthClientUncheckedCreateWithoutUserInput> | OAuthClientCreateWithoutUserInput[] | OAuthClientUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OAuthClientCreateOrConnectWithoutUserInput | OAuthClientCreateOrConnectWithoutUserInput[]
    upsert?: OAuthClientUpsertWithWhereUniqueWithoutUserInput | OAuthClientUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OAuthClientCreateManyUserInputEnvelope
    set?: OAuthClientWhereUniqueInput | OAuthClientWhereUniqueInput[]
    disconnect?: OAuthClientWhereUniqueInput | OAuthClientWhereUniqueInput[]
    delete?: OAuthClientWhereUniqueInput | OAuthClientWhereUniqueInput[]
    connect?: OAuthClientWhereUniqueInput | OAuthClientWhereUniqueInput[]
    update?: OAuthClientUpdateWithWhereUniqueWithoutUserInput | OAuthClientUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OAuthClientUpdateManyWithWhereWithoutUserInput | OAuthClientUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OAuthClientScalarWhereInput | OAuthClientScalarWhereInput[]
  }

  export type OAuthAuthorizationCodeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OAuthAuthorizationCodeCreateWithoutUserInput, OAuthAuthorizationCodeUncheckedCreateWithoutUserInput> | OAuthAuthorizationCodeCreateWithoutUserInput[] | OAuthAuthorizationCodeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OAuthAuthorizationCodeCreateOrConnectWithoutUserInput | OAuthAuthorizationCodeCreateOrConnectWithoutUserInput[]
    upsert?: OAuthAuthorizationCodeUpsertWithWhereUniqueWithoutUserInput | OAuthAuthorizationCodeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OAuthAuthorizationCodeCreateManyUserInputEnvelope
    set?: OAuthAuthorizationCodeWhereUniqueInput | OAuthAuthorizationCodeWhereUniqueInput[]
    disconnect?: OAuthAuthorizationCodeWhereUniqueInput | OAuthAuthorizationCodeWhereUniqueInput[]
    delete?: OAuthAuthorizationCodeWhereUniqueInput | OAuthAuthorizationCodeWhereUniqueInput[]
    connect?: OAuthAuthorizationCodeWhereUniqueInput | OAuthAuthorizationCodeWhereUniqueInput[]
    update?: OAuthAuthorizationCodeUpdateWithWhereUniqueWithoutUserInput | OAuthAuthorizationCodeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OAuthAuthorizationCodeUpdateManyWithWhereWithoutUserInput | OAuthAuthorizationCodeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OAuthAuthorizationCodeScalarWhereInput | OAuthAuthorizationCodeScalarWhereInput[]
  }

  export type OAuthAccessTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OAuthAccessTokenCreateWithoutUserInput, OAuthAccessTokenUncheckedCreateWithoutUserInput> | OAuthAccessTokenCreateWithoutUserInput[] | OAuthAccessTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OAuthAccessTokenCreateOrConnectWithoutUserInput | OAuthAccessTokenCreateOrConnectWithoutUserInput[]
    upsert?: OAuthAccessTokenUpsertWithWhereUniqueWithoutUserInput | OAuthAccessTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OAuthAccessTokenCreateManyUserInputEnvelope
    set?: OAuthAccessTokenWhereUniqueInput | OAuthAccessTokenWhereUniqueInput[]
    disconnect?: OAuthAccessTokenWhereUniqueInput | OAuthAccessTokenWhereUniqueInput[]
    delete?: OAuthAccessTokenWhereUniqueInput | OAuthAccessTokenWhereUniqueInput[]
    connect?: OAuthAccessTokenWhereUniqueInput | OAuthAccessTokenWhereUniqueInput[]
    update?: OAuthAccessTokenUpdateWithWhereUniqueWithoutUserInput | OAuthAccessTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OAuthAccessTokenUpdateManyWithWhereWithoutUserInput | OAuthAccessTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OAuthAccessTokenScalarWhereInput | OAuthAccessTokenScalarWhereInput[]
  }

  export type OAuthRefreshTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OAuthRefreshTokenCreateWithoutUserInput, OAuthRefreshTokenUncheckedCreateWithoutUserInput> | OAuthRefreshTokenCreateWithoutUserInput[] | OAuthRefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OAuthRefreshTokenCreateOrConnectWithoutUserInput | OAuthRefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: OAuthRefreshTokenUpsertWithWhereUniqueWithoutUserInput | OAuthRefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OAuthRefreshTokenCreateManyUserInputEnvelope
    set?: OAuthRefreshTokenWhereUniqueInput | OAuthRefreshTokenWhereUniqueInput[]
    disconnect?: OAuthRefreshTokenWhereUniqueInput | OAuthRefreshTokenWhereUniqueInput[]
    delete?: OAuthRefreshTokenWhereUniqueInput | OAuthRefreshTokenWhereUniqueInput[]
    connect?: OAuthRefreshTokenWhereUniqueInput | OAuthRefreshTokenWhereUniqueInput[]
    update?: OAuthRefreshTokenUpdateWithWhereUniqueWithoutUserInput | OAuthRefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OAuthRefreshTokenUpdateManyWithWhereWithoutUserInput | OAuthRefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OAuthRefreshTokenScalarWhereInput | OAuthRefreshTokenScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OAuthClientCreateredirectUrisInput = {
    set: string[]
  }

  export type OAuthClientCreategrantsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutOauthClientsInput = {
    create?: XOR<UserCreateWithoutOauthClientsInput, UserUncheckedCreateWithoutOauthClientsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOauthClientsInput
    connect?: UserWhereUniqueInput
  }

  export type OAuthAccessTokenCreateNestedManyWithoutClientInput = {
    create?: XOR<OAuthAccessTokenCreateWithoutClientInput, OAuthAccessTokenUncheckedCreateWithoutClientInput> | OAuthAccessTokenCreateWithoutClientInput[] | OAuthAccessTokenUncheckedCreateWithoutClientInput[]
    connectOrCreate?: OAuthAccessTokenCreateOrConnectWithoutClientInput | OAuthAccessTokenCreateOrConnectWithoutClientInput[]
    createMany?: OAuthAccessTokenCreateManyClientInputEnvelope
    connect?: OAuthAccessTokenWhereUniqueInput | OAuthAccessTokenWhereUniqueInput[]
  }

  export type OAuthRefreshTokenCreateNestedManyWithoutClientInput = {
    create?: XOR<OAuthRefreshTokenCreateWithoutClientInput, OAuthRefreshTokenUncheckedCreateWithoutClientInput> | OAuthRefreshTokenCreateWithoutClientInput[] | OAuthRefreshTokenUncheckedCreateWithoutClientInput[]
    connectOrCreate?: OAuthRefreshTokenCreateOrConnectWithoutClientInput | OAuthRefreshTokenCreateOrConnectWithoutClientInput[]
    createMany?: OAuthRefreshTokenCreateManyClientInputEnvelope
    connect?: OAuthRefreshTokenWhereUniqueInput | OAuthRefreshTokenWhereUniqueInput[]
  }

  export type OAuthAuthorizationCodeCreateNestedManyWithoutClientInput = {
    create?: XOR<OAuthAuthorizationCodeCreateWithoutClientInput, OAuthAuthorizationCodeUncheckedCreateWithoutClientInput> | OAuthAuthorizationCodeCreateWithoutClientInput[] | OAuthAuthorizationCodeUncheckedCreateWithoutClientInput[]
    connectOrCreate?: OAuthAuthorizationCodeCreateOrConnectWithoutClientInput | OAuthAuthorizationCodeCreateOrConnectWithoutClientInput[]
    createMany?: OAuthAuthorizationCodeCreateManyClientInputEnvelope
    connect?: OAuthAuthorizationCodeWhereUniqueInput | OAuthAuthorizationCodeWhereUniqueInput[]
  }

  export type OAuthAccessTokenUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<OAuthAccessTokenCreateWithoutClientInput, OAuthAccessTokenUncheckedCreateWithoutClientInput> | OAuthAccessTokenCreateWithoutClientInput[] | OAuthAccessTokenUncheckedCreateWithoutClientInput[]
    connectOrCreate?: OAuthAccessTokenCreateOrConnectWithoutClientInput | OAuthAccessTokenCreateOrConnectWithoutClientInput[]
    createMany?: OAuthAccessTokenCreateManyClientInputEnvelope
    connect?: OAuthAccessTokenWhereUniqueInput | OAuthAccessTokenWhereUniqueInput[]
  }

  export type OAuthRefreshTokenUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<OAuthRefreshTokenCreateWithoutClientInput, OAuthRefreshTokenUncheckedCreateWithoutClientInput> | OAuthRefreshTokenCreateWithoutClientInput[] | OAuthRefreshTokenUncheckedCreateWithoutClientInput[]
    connectOrCreate?: OAuthRefreshTokenCreateOrConnectWithoutClientInput | OAuthRefreshTokenCreateOrConnectWithoutClientInput[]
    createMany?: OAuthRefreshTokenCreateManyClientInputEnvelope
    connect?: OAuthRefreshTokenWhereUniqueInput | OAuthRefreshTokenWhereUniqueInput[]
  }

  export type OAuthAuthorizationCodeUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<OAuthAuthorizationCodeCreateWithoutClientInput, OAuthAuthorizationCodeUncheckedCreateWithoutClientInput> | OAuthAuthorizationCodeCreateWithoutClientInput[] | OAuthAuthorizationCodeUncheckedCreateWithoutClientInput[]
    connectOrCreate?: OAuthAuthorizationCodeCreateOrConnectWithoutClientInput | OAuthAuthorizationCodeCreateOrConnectWithoutClientInput[]
    createMany?: OAuthAuthorizationCodeCreateManyClientInputEnvelope
    connect?: OAuthAuthorizationCodeWhereUniqueInput | OAuthAuthorizationCodeWhereUniqueInput[]
  }

  export type OAuthClientUpdateredirectUrisInput = {
    set?: string[]
    push?: string | string[]
  }

  export type OAuthClientUpdategrantsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneWithoutOauthClientsNestedInput = {
    create?: XOR<UserCreateWithoutOauthClientsInput, UserUncheckedCreateWithoutOauthClientsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOauthClientsInput
    upsert?: UserUpsertWithoutOauthClientsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOauthClientsInput, UserUpdateWithoutOauthClientsInput>, UserUncheckedUpdateWithoutOauthClientsInput>
  }

  export type OAuthAccessTokenUpdateManyWithoutClientNestedInput = {
    create?: XOR<OAuthAccessTokenCreateWithoutClientInput, OAuthAccessTokenUncheckedCreateWithoutClientInput> | OAuthAccessTokenCreateWithoutClientInput[] | OAuthAccessTokenUncheckedCreateWithoutClientInput[]
    connectOrCreate?: OAuthAccessTokenCreateOrConnectWithoutClientInput | OAuthAccessTokenCreateOrConnectWithoutClientInput[]
    upsert?: OAuthAccessTokenUpsertWithWhereUniqueWithoutClientInput | OAuthAccessTokenUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: OAuthAccessTokenCreateManyClientInputEnvelope
    set?: OAuthAccessTokenWhereUniqueInput | OAuthAccessTokenWhereUniqueInput[]
    disconnect?: OAuthAccessTokenWhereUniqueInput | OAuthAccessTokenWhereUniqueInput[]
    delete?: OAuthAccessTokenWhereUniqueInput | OAuthAccessTokenWhereUniqueInput[]
    connect?: OAuthAccessTokenWhereUniqueInput | OAuthAccessTokenWhereUniqueInput[]
    update?: OAuthAccessTokenUpdateWithWhereUniqueWithoutClientInput | OAuthAccessTokenUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: OAuthAccessTokenUpdateManyWithWhereWithoutClientInput | OAuthAccessTokenUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: OAuthAccessTokenScalarWhereInput | OAuthAccessTokenScalarWhereInput[]
  }

  export type OAuthRefreshTokenUpdateManyWithoutClientNestedInput = {
    create?: XOR<OAuthRefreshTokenCreateWithoutClientInput, OAuthRefreshTokenUncheckedCreateWithoutClientInput> | OAuthRefreshTokenCreateWithoutClientInput[] | OAuthRefreshTokenUncheckedCreateWithoutClientInput[]
    connectOrCreate?: OAuthRefreshTokenCreateOrConnectWithoutClientInput | OAuthRefreshTokenCreateOrConnectWithoutClientInput[]
    upsert?: OAuthRefreshTokenUpsertWithWhereUniqueWithoutClientInput | OAuthRefreshTokenUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: OAuthRefreshTokenCreateManyClientInputEnvelope
    set?: OAuthRefreshTokenWhereUniqueInput | OAuthRefreshTokenWhereUniqueInput[]
    disconnect?: OAuthRefreshTokenWhereUniqueInput | OAuthRefreshTokenWhereUniqueInput[]
    delete?: OAuthRefreshTokenWhereUniqueInput | OAuthRefreshTokenWhereUniqueInput[]
    connect?: OAuthRefreshTokenWhereUniqueInput | OAuthRefreshTokenWhereUniqueInput[]
    update?: OAuthRefreshTokenUpdateWithWhereUniqueWithoutClientInput | OAuthRefreshTokenUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: OAuthRefreshTokenUpdateManyWithWhereWithoutClientInput | OAuthRefreshTokenUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: OAuthRefreshTokenScalarWhereInput | OAuthRefreshTokenScalarWhereInput[]
  }

  export type OAuthAuthorizationCodeUpdateManyWithoutClientNestedInput = {
    create?: XOR<OAuthAuthorizationCodeCreateWithoutClientInput, OAuthAuthorizationCodeUncheckedCreateWithoutClientInput> | OAuthAuthorizationCodeCreateWithoutClientInput[] | OAuthAuthorizationCodeUncheckedCreateWithoutClientInput[]
    connectOrCreate?: OAuthAuthorizationCodeCreateOrConnectWithoutClientInput | OAuthAuthorizationCodeCreateOrConnectWithoutClientInput[]
    upsert?: OAuthAuthorizationCodeUpsertWithWhereUniqueWithoutClientInput | OAuthAuthorizationCodeUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: OAuthAuthorizationCodeCreateManyClientInputEnvelope
    set?: OAuthAuthorizationCodeWhereUniqueInput | OAuthAuthorizationCodeWhereUniqueInput[]
    disconnect?: OAuthAuthorizationCodeWhereUniqueInput | OAuthAuthorizationCodeWhereUniqueInput[]
    delete?: OAuthAuthorizationCodeWhereUniqueInput | OAuthAuthorizationCodeWhereUniqueInput[]
    connect?: OAuthAuthorizationCodeWhereUniqueInput | OAuthAuthorizationCodeWhereUniqueInput[]
    update?: OAuthAuthorizationCodeUpdateWithWhereUniqueWithoutClientInput | OAuthAuthorizationCodeUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: OAuthAuthorizationCodeUpdateManyWithWhereWithoutClientInput | OAuthAuthorizationCodeUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: OAuthAuthorizationCodeScalarWhereInput | OAuthAuthorizationCodeScalarWhereInput[]
  }

  export type OAuthAccessTokenUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<OAuthAccessTokenCreateWithoutClientInput, OAuthAccessTokenUncheckedCreateWithoutClientInput> | OAuthAccessTokenCreateWithoutClientInput[] | OAuthAccessTokenUncheckedCreateWithoutClientInput[]
    connectOrCreate?: OAuthAccessTokenCreateOrConnectWithoutClientInput | OAuthAccessTokenCreateOrConnectWithoutClientInput[]
    upsert?: OAuthAccessTokenUpsertWithWhereUniqueWithoutClientInput | OAuthAccessTokenUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: OAuthAccessTokenCreateManyClientInputEnvelope
    set?: OAuthAccessTokenWhereUniqueInput | OAuthAccessTokenWhereUniqueInput[]
    disconnect?: OAuthAccessTokenWhereUniqueInput | OAuthAccessTokenWhereUniqueInput[]
    delete?: OAuthAccessTokenWhereUniqueInput | OAuthAccessTokenWhereUniqueInput[]
    connect?: OAuthAccessTokenWhereUniqueInput | OAuthAccessTokenWhereUniqueInput[]
    update?: OAuthAccessTokenUpdateWithWhereUniqueWithoutClientInput | OAuthAccessTokenUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: OAuthAccessTokenUpdateManyWithWhereWithoutClientInput | OAuthAccessTokenUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: OAuthAccessTokenScalarWhereInput | OAuthAccessTokenScalarWhereInput[]
  }

  export type OAuthRefreshTokenUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<OAuthRefreshTokenCreateWithoutClientInput, OAuthRefreshTokenUncheckedCreateWithoutClientInput> | OAuthRefreshTokenCreateWithoutClientInput[] | OAuthRefreshTokenUncheckedCreateWithoutClientInput[]
    connectOrCreate?: OAuthRefreshTokenCreateOrConnectWithoutClientInput | OAuthRefreshTokenCreateOrConnectWithoutClientInput[]
    upsert?: OAuthRefreshTokenUpsertWithWhereUniqueWithoutClientInput | OAuthRefreshTokenUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: OAuthRefreshTokenCreateManyClientInputEnvelope
    set?: OAuthRefreshTokenWhereUniqueInput | OAuthRefreshTokenWhereUniqueInput[]
    disconnect?: OAuthRefreshTokenWhereUniqueInput | OAuthRefreshTokenWhereUniqueInput[]
    delete?: OAuthRefreshTokenWhereUniqueInput | OAuthRefreshTokenWhereUniqueInput[]
    connect?: OAuthRefreshTokenWhereUniqueInput | OAuthRefreshTokenWhereUniqueInput[]
    update?: OAuthRefreshTokenUpdateWithWhereUniqueWithoutClientInput | OAuthRefreshTokenUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: OAuthRefreshTokenUpdateManyWithWhereWithoutClientInput | OAuthRefreshTokenUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: OAuthRefreshTokenScalarWhereInput | OAuthRefreshTokenScalarWhereInput[]
  }

  export type OAuthAuthorizationCodeUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<OAuthAuthorizationCodeCreateWithoutClientInput, OAuthAuthorizationCodeUncheckedCreateWithoutClientInput> | OAuthAuthorizationCodeCreateWithoutClientInput[] | OAuthAuthorizationCodeUncheckedCreateWithoutClientInput[]
    connectOrCreate?: OAuthAuthorizationCodeCreateOrConnectWithoutClientInput | OAuthAuthorizationCodeCreateOrConnectWithoutClientInput[]
    upsert?: OAuthAuthorizationCodeUpsertWithWhereUniqueWithoutClientInput | OAuthAuthorizationCodeUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: OAuthAuthorizationCodeCreateManyClientInputEnvelope
    set?: OAuthAuthorizationCodeWhereUniqueInput | OAuthAuthorizationCodeWhereUniqueInput[]
    disconnect?: OAuthAuthorizationCodeWhereUniqueInput | OAuthAuthorizationCodeWhereUniqueInput[]
    delete?: OAuthAuthorizationCodeWhereUniqueInput | OAuthAuthorizationCodeWhereUniqueInput[]
    connect?: OAuthAuthorizationCodeWhereUniqueInput | OAuthAuthorizationCodeWhereUniqueInput[]
    update?: OAuthAuthorizationCodeUpdateWithWhereUniqueWithoutClientInput | OAuthAuthorizationCodeUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: OAuthAuthorizationCodeUpdateManyWithWhereWithoutClientInput | OAuthAuthorizationCodeUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: OAuthAuthorizationCodeScalarWhereInput | OAuthAuthorizationCodeScalarWhereInput[]
  }

  export type OAuthClientCreateNestedOneWithoutAuthorizationCodesInput = {
    create?: XOR<OAuthClientCreateWithoutAuthorizationCodesInput, OAuthClientUncheckedCreateWithoutAuthorizationCodesInput>
    connectOrCreate?: OAuthClientCreateOrConnectWithoutAuthorizationCodesInput
    connect?: OAuthClientWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAuthCodesInput = {
    create?: XOR<UserCreateWithoutAuthCodesInput, UserUncheckedCreateWithoutAuthCodesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuthCodesInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type OAuthClientUpdateOneRequiredWithoutAuthorizationCodesNestedInput = {
    create?: XOR<OAuthClientCreateWithoutAuthorizationCodesInput, OAuthClientUncheckedCreateWithoutAuthorizationCodesInput>
    connectOrCreate?: OAuthClientCreateOrConnectWithoutAuthorizationCodesInput
    upsert?: OAuthClientUpsertWithoutAuthorizationCodesInput
    connect?: OAuthClientWhereUniqueInput
    update?: XOR<XOR<OAuthClientUpdateToOneWithWhereWithoutAuthorizationCodesInput, OAuthClientUpdateWithoutAuthorizationCodesInput>, OAuthClientUncheckedUpdateWithoutAuthorizationCodesInput>
  }

  export type UserUpdateOneRequiredWithoutAuthCodesNestedInput = {
    create?: XOR<UserCreateWithoutAuthCodesInput, UserUncheckedCreateWithoutAuthCodesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuthCodesInput
    upsert?: UserUpsertWithoutAuthCodesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuthCodesInput, UserUpdateWithoutAuthCodesInput>, UserUncheckedUpdateWithoutAuthCodesInput>
  }

  export type OAuthClientCreateNestedOneWithoutAccessTokensInput = {
    create?: XOR<OAuthClientCreateWithoutAccessTokensInput, OAuthClientUncheckedCreateWithoutAccessTokensInput>
    connectOrCreate?: OAuthClientCreateOrConnectWithoutAccessTokensInput
    connect?: OAuthClientWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAccessTokensInput = {
    create?: XOR<UserCreateWithoutAccessTokensInput, UserUncheckedCreateWithoutAccessTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccessTokensInput
    connect?: UserWhereUniqueInput
  }

  export type OAuthClientUpdateOneRequiredWithoutAccessTokensNestedInput = {
    create?: XOR<OAuthClientCreateWithoutAccessTokensInput, OAuthClientUncheckedCreateWithoutAccessTokensInput>
    connectOrCreate?: OAuthClientCreateOrConnectWithoutAccessTokensInput
    upsert?: OAuthClientUpsertWithoutAccessTokensInput
    connect?: OAuthClientWhereUniqueInput
    update?: XOR<XOR<OAuthClientUpdateToOneWithWhereWithoutAccessTokensInput, OAuthClientUpdateWithoutAccessTokensInput>, OAuthClientUncheckedUpdateWithoutAccessTokensInput>
  }

  export type UserUpdateOneRequiredWithoutAccessTokensNestedInput = {
    create?: XOR<UserCreateWithoutAccessTokensInput, UserUncheckedCreateWithoutAccessTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccessTokensInput
    upsert?: UserUpsertWithoutAccessTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccessTokensInput, UserUpdateWithoutAccessTokensInput>, UserUncheckedUpdateWithoutAccessTokensInput>
  }

  export type OAuthClientCreateNestedOneWithoutRefreshTokensInput = {
    create?: XOR<OAuthClientCreateWithoutRefreshTokensInput, OAuthClientUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: OAuthClientCreateOrConnectWithoutRefreshTokensInput
    connect?: OAuthClientWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRefreshTokensInput = {
    create?: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput
    connect?: UserWhereUniqueInput
  }

  export type OAuthClientUpdateOneRequiredWithoutRefreshTokensNestedInput = {
    create?: XOR<OAuthClientCreateWithoutRefreshTokensInput, OAuthClientUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: OAuthClientCreateOrConnectWithoutRefreshTokensInput
    upsert?: OAuthClientUpsertWithoutRefreshTokensInput
    connect?: OAuthClientWhereUniqueInput
    update?: XOR<XOR<OAuthClientUpdateToOneWithWhereWithoutRefreshTokensInput, OAuthClientUpdateWithoutRefreshTokensInput>, OAuthClientUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type UserUpdateOneRequiredWithoutRefreshTokensNestedInput = {
    create?: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput
    upsert?: UserUpsertWithoutRefreshTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRefreshTokensInput, UserUpdateWithoutRefreshTokensInput>, UserUncheckedUpdateWithoutRefreshTokensInput>
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
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type PostCreateWithoutAuthorInput = {
    title: string
    content?: string | null
    published?: boolean
  }

  export type PostUncheckedCreateWithoutAuthorInput = {
    id?: number
    title: string
    content?: string | null
    published?: boolean
  }

  export type PostCreateOrConnectWithoutAuthorInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
  }

  export type PostCreateManyAuthorInputEnvelope = {
    data: PostCreateManyAuthorInput | PostCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type OAuthClientCreateWithoutUserInput = {
    clientId: string
    clientSecret: string
    redirectUris?: OAuthClientCreateredirectUrisInput | string[]
    grants?: OAuthClientCreategrantsInput | string[]
    accessTokens?: OAuthAccessTokenCreateNestedManyWithoutClientInput
    refreshTokens?: OAuthRefreshTokenCreateNestedManyWithoutClientInput
    authorizationCodes?: OAuthAuthorizationCodeCreateNestedManyWithoutClientInput
  }

  export type OAuthClientUncheckedCreateWithoutUserInput = {
    id?: number
    clientId: string
    clientSecret: string
    redirectUris?: OAuthClientCreateredirectUrisInput | string[]
    grants?: OAuthClientCreategrantsInput | string[]
    accessTokens?: OAuthAccessTokenUncheckedCreateNestedManyWithoutClientInput
    refreshTokens?: OAuthRefreshTokenUncheckedCreateNestedManyWithoutClientInput
    authorizationCodes?: OAuthAuthorizationCodeUncheckedCreateNestedManyWithoutClientInput
  }

  export type OAuthClientCreateOrConnectWithoutUserInput = {
    where: OAuthClientWhereUniqueInput
    create: XOR<OAuthClientCreateWithoutUserInput, OAuthClientUncheckedCreateWithoutUserInput>
  }

  export type OAuthClientCreateManyUserInputEnvelope = {
    data: OAuthClientCreateManyUserInput | OAuthClientCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OAuthAuthorizationCodeCreateWithoutUserInput = {
    code: string
    expiresAt: Date | string
    redirectUri: string
    scope?: string | null
    client: OAuthClientCreateNestedOneWithoutAuthorizationCodesInput
  }

  export type OAuthAuthorizationCodeUncheckedCreateWithoutUserInput = {
    id?: number
    code: string
    expiresAt: Date | string
    redirectUri: string
    scope?: string | null
    clientId: number
  }

  export type OAuthAuthorizationCodeCreateOrConnectWithoutUserInput = {
    where: OAuthAuthorizationCodeWhereUniqueInput
    create: XOR<OAuthAuthorizationCodeCreateWithoutUserInput, OAuthAuthorizationCodeUncheckedCreateWithoutUserInput>
  }

  export type OAuthAuthorizationCodeCreateManyUserInputEnvelope = {
    data: OAuthAuthorizationCodeCreateManyUserInput | OAuthAuthorizationCodeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OAuthAccessTokenCreateWithoutUserInput = {
    accessToken: string
    expiresAt: Date | string
    scope?: string | null
    client: OAuthClientCreateNestedOneWithoutAccessTokensInput
  }

  export type OAuthAccessTokenUncheckedCreateWithoutUserInput = {
    id?: number
    accessToken: string
    expiresAt: Date | string
    scope?: string | null
    clientId: number
  }

  export type OAuthAccessTokenCreateOrConnectWithoutUserInput = {
    where: OAuthAccessTokenWhereUniqueInput
    create: XOR<OAuthAccessTokenCreateWithoutUserInput, OAuthAccessTokenUncheckedCreateWithoutUserInput>
  }

  export type OAuthAccessTokenCreateManyUserInputEnvelope = {
    data: OAuthAccessTokenCreateManyUserInput | OAuthAccessTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OAuthRefreshTokenCreateWithoutUserInput = {
    refreshToken: string
    expiresAt: Date | string
    scope?: string | null
    client: OAuthClientCreateNestedOneWithoutRefreshTokensInput
  }

  export type OAuthRefreshTokenUncheckedCreateWithoutUserInput = {
    id?: number
    refreshToken: string
    expiresAt: Date | string
    scope?: string | null
    clientId: number
  }

  export type OAuthRefreshTokenCreateOrConnectWithoutUserInput = {
    where: OAuthRefreshTokenWhereUniqueInput
    create: XOR<OAuthRefreshTokenCreateWithoutUserInput, OAuthRefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type OAuthRefreshTokenCreateManyUserInputEnvelope = {
    data: OAuthRefreshTokenCreateManyUserInput | OAuthRefreshTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PostUpsertWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutAuthorInput, PostUncheckedUpdateWithoutAuthorInput>
    create: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
  }

  export type PostUpdateWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutAuthorInput, PostUncheckedUpdateWithoutAuthorInput>
  }

  export type PostUpdateManyWithWhereWithoutAuthorInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutAuthorInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: IntFilter<"Post"> | number
    title?: StringFilter<"Post"> | string
    content?: StringNullableFilter<"Post"> | string | null
    published?: BoolFilter<"Post"> | boolean
    authorId?: IntNullableFilter<"Post"> | number | null
  }

  export type OAuthClientUpsertWithWhereUniqueWithoutUserInput = {
    where: OAuthClientWhereUniqueInput
    update: XOR<OAuthClientUpdateWithoutUserInput, OAuthClientUncheckedUpdateWithoutUserInput>
    create: XOR<OAuthClientCreateWithoutUserInput, OAuthClientUncheckedCreateWithoutUserInput>
  }

  export type OAuthClientUpdateWithWhereUniqueWithoutUserInput = {
    where: OAuthClientWhereUniqueInput
    data: XOR<OAuthClientUpdateWithoutUserInput, OAuthClientUncheckedUpdateWithoutUserInput>
  }

  export type OAuthClientUpdateManyWithWhereWithoutUserInput = {
    where: OAuthClientScalarWhereInput
    data: XOR<OAuthClientUpdateManyMutationInput, OAuthClientUncheckedUpdateManyWithoutUserInput>
  }

  export type OAuthClientScalarWhereInput = {
    AND?: OAuthClientScalarWhereInput | OAuthClientScalarWhereInput[]
    OR?: OAuthClientScalarWhereInput[]
    NOT?: OAuthClientScalarWhereInput | OAuthClientScalarWhereInput[]
    id?: IntFilter<"OAuthClient"> | number
    clientId?: StringFilter<"OAuthClient"> | string
    clientSecret?: StringFilter<"OAuthClient"> | string
    redirectUris?: StringNullableListFilter<"OAuthClient">
    grants?: StringNullableListFilter<"OAuthClient">
    userId?: IntNullableFilter<"OAuthClient"> | number | null
  }

  export type OAuthAuthorizationCodeUpsertWithWhereUniqueWithoutUserInput = {
    where: OAuthAuthorizationCodeWhereUniqueInput
    update: XOR<OAuthAuthorizationCodeUpdateWithoutUserInput, OAuthAuthorizationCodeUncheckedUpdateWithoutUserInput>
    create: XOR<OAuthAuthorizationCodeCreateWithoutUserInput, OAuthAuthorizationCodeUncheckedCreateWithoutUserInput>
  }

  export type OAuthAuthorizationCodeUpdateWithWhereUniqueWithoutUserInput = {
    where: OAuthAuthorizationCodeWhereUniqueInput
    data: XOR<OAuthAuthorizationCodeUpdateWithoutUserInput, OAuthAuthorizationCodeUncheckedUpdateWithoutUserInput>
  }

  export type OAuthAuthorizationCodeUpdateManyWithWhereWithoutUserInput = {
    where: OAuthAuthorizationCodeScalarWhereInput
    data: XOR<OAuthAuthorizationCodeUpdateManyMutationInput, OAuthAuthorizationCodeUncheckedUpdateManyWithoutUserInput>
  }

  export type OAuthAuthorizationCodeScalarWhereInput = {
    AND?: OAuthAuthorizationCodeScalarWhereInput | OAuthAuthorizationCodeScalarWhereInput[]
    OR?: OAuthAuthorizationCodeScalarWhereInput[]
    NOT?: OAuthAuthorizationCodeScalarWhereInput | OAuthAuthorizationCodeScalarWhereInput[]
    id?: IntFilter<"OAuthAuthorizationCode"> | number
    code?: StringFilter<"OAuthAuthorizationCode"> | string
    expiresAt?: DateTimeFilter<"OAuthAuthorizationCode"> | Date | string
    redirectUri?: StringFilter<"OAuthAuthorizationCode"> | string
    scope?: StringNullableFilter<"OAuthAuthorizationCode"> | string | null
    clientId?: IntFilter<"OAuthAuthorizationCode"> | number
    userId?: IntFilter<"OAuthAuthorizationCode"> | number
  }

  export type OAuthAccessTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: OAuthAccessTokenWhereUniqueInput
    update: XOR<OAuthAccessTokenUpdateWithoutUserInput, OAuthAccessTokenUncheckedUpdateWithoutUserInput>
    create: XOR<OAuthAccessTokenCreateWithoutUserInput, OAuthAccessTokenUncheckedCreateWithoutUserInput>
  }

  export type OAuthAccessTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: OAuthAccessTokenWhereUniqueInput
    data: XOR<OAuthAccessTokenUpdateWithoutUserInput, OAuthAccessTokenUncheckedUpdateWithoutUserInput>
  }

  export type OAuthAccessTokenUpdateManyWithWhereWithoutUserInput = {
    where: OAuthAccessTokenScalarWhereInput
    data: XOR<OAuthAccessTokenUpdateManyMutationInput, OAuthAccessTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type OAuthAccessTokenScalarWhereInput = {
    AND?: OAuthAccessTokenScalarWhereInput | OAuthAccessTokenScalarWhereInput[]
    OR?: OAuthAccessTokenScalarWhereInput[]
    NOT?: OAuthAccessTokenScalarWhereInput | OAuthAccessTokenScalarWhereInput[]
    id?: IntFilter<"OAuthAccessToken"> | number
    accessToken?: StringFilter<"OAuthAccessToken"> | string
    expiresAt?: DateTimeFilter<"OAuthAccessToken"> | Date | string
    scope?: StringNullableFilter<"OAuthAccessToken"> | string | null
    clientId?: IntFilter<"OAuthAccessToken"> | number
    userId?: IntFilter<"OAuthAccessToken"> | number
  }

  export type OAuthRefreshTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: OAuthRefreshTokenWhereUniqueInput
    update: XOR<OAuthRefreshTokenUpdateWithoutUserInput, OAuthRefreshTokenUncheckedUpdateWithoutUserInput>
    create: XOR<OAuthRefreshTokenCreateWithoutUserInput, OAuthRefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type OAuthRefreshTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: OAuthRefreshTokenWhereUniqueInput
    data: XOR<OAuthRefreshTokenUpdateWithoutUserInput, OAuthRefreshTokenUncheckedUpdateWithoutUserInput>
  }

  export type OAuthRefreshTokenUpdateManyWithWhereWithoutUserInput = {
    where: OAuthRefreshTokenScalarWhereInput
    data: XOR<OAuthRefreshTokenUpdateManyMutationInput, OAuthRefreshTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type OAuthRefreshTokenScalarWhereInput = {
    AND?: OAuthRefreshTokenScalarWhereInput | OAuthRefreshTokenScalarWhereInput[]
    OR?: OAuthRefreshTokenScalarWhereInput[]
    NOT?: OAuthRefreshTokenScalarWhereInput | OAuthRefreshTokenScalarWhereInput[]
    id?: IntFilter<"OAuthRefreshToken"> | number
    refreshToken?: StringFilter<"OAuthRefreshToken"> | string
    expiresAt?: DateTimeFilter<"OAuthRefreshToken"> | Date | string
    scope?: StringNullableFilter<"OAuthRefreshToken"> | string | null
    clientId?: IntFilter<"OAuthRefreshToken"> | number
    userId?: IntFilter<"OAuthRefreshToken"> | number
  }

  export type UserCreateWithoutPostsInput = {
    email: string
    username?: string | null
    password?: string | null
    bio?: string | null
    oauthClients?: OAuthClientCreateNestedManyWithoutUserInput
    authCodes?: OAuthAuthorizationCodeCreateNestedManyWithoutUserInput
    accessTokens?: OAuthAccessTokenCreateNestedManyWithoutUserInput
    refreshTokens?: OAuthRefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: number
    email: string
    username?: string | null
    password?: string | null
    bio?: string | null
    oauthClients?: OAuthClientUncheckedCreateNestedManyWithoutUserInput
    authCodes?: OAuthAuthorizationCodeUncheckedCreateNestedManyWithoutUserInput
    accessTokens?: OAuthAccessTokenUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: OAuthRefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    oauthClients?: OAuthClientUpdateManyWithoutUserNestedInput
    authCodes?: OAuthAuthorizationCodeUpdateManyWithoutUserNestedInput
    accessTokens?: OAuthAccessTokenUpdateManyWithoutUserNestedInput
    refreshTokens?: OAuthRefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    oauthClients?: OAuthClientUncheckedUpdateManyWithoutUserNestedInput
    authCodes?: OAuthAuthorizationCodeUncheckedUpdateManyWithoutUserNestedInput
    accessTokens?: OAuthAccessTokenUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: OAuthRefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutOauthClientsInput = {
    email: string
    username?: string | null
    password?: string | null
    bio?: string | null
    posts?: PostCreateNestedManyWithoutAuthorInput
    authCodes?: OAuthAuthorizationCodeCreateNestedManyWithoutUserInput
    accessTokens?: OAuthAccessTokenCreateNestedManyWithoutUserInput
    refreshTokens?: OAuthRefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOauthClientsInput = {
    id?: number
    email: string
    username?: string | null
    password?: string | null
    bio?: string | null
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    authCodes?: OAuthAuthorizationCodeUncheckedCreateNestedManyWithoutUserInput
    accessTokens?: OAuthAccessTokenUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: OAuthRefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOauthClientsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOauthClientsInput, UserUncheckedCreateWithoutOauthClientsInput>
  }

  export type OAuthAccessTokenCreateWithoutClientInput = {
    accessToken: string
    expiresAt: Date | string
    scope?: string | null
    user: UserCreateNestedOneWithoutAccessTokensInput
  }

  export type OAuthAccessTokenUncheckedCreateWithoutClientInput = {
    id?: number
    accessToken: string
    expiresAt: Date | string
    scope?: string | null
    userId: number
  }

  export type OAuthAccessTokenCreateOrConnectWithoutClientInput = {
    where: OAuthAccessTokenWhereUniqueInput
    create: XOR<OAuthAccessTokenCreateWithoutClientInput, OAuthAccessTokenUncheckedCreateWithoutClientInput>
  }

  export type OAuthAccessTokenCreateManyClientInputEnvelope = {
    data: OAuthAccessTokenCreateManyClientInput | OAuthAccessTokenCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type OAuthRefreshTokenCreateWithoutClientInput = {
    refreshToken: string
    expiresAt: Date | string
    scope?: string | null
    user: UserCreateNestedOneWithoutRefreshTokensInput
  }

  export type OAuthRefreshTokenUncheckedCreateWithoutClientInput = {
    id?: number
    refreshToken: string
    expiresAt: Date | string
    scope?: string | null
    userId: number
  }

  export type OAuthRefreshTokenCreateOrConnectWithoutClientInput = {
    where: OAuthRefreshTokenWhereUniqueInput
    create: XOR<OAuthRefreshTokenCreateWithoutClientInput, OAuthRefreshTokenUncheckedCreateWithoutClientInput>
  }

  export type OAuthRefreshTokenCreateManyClientInputEnvelope = {
    data: OAuthRefreshTokenCreateManyClientInput | OAuthRefreshTokenCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type OAuthAuthorizationCodeCreateWithoutClientInput = {
    code: string
    expiresAt: Date | string
    redirectUri: string
    scope?: string | null
    user: UserCreateNestedOneWithoutAuthCodesInput
  }

  export type OAuthAuthorizationCodeUncheckedCreateWithoutClientInput = {
    id?: number
    code: string
    expiresAt: Date | string
    redirectUri: string
    scope?: string | null
    userId: number
  }

  export type OAuthAuthorizationCodeCreateOrConnectWithoutClientInput = {
    where: OAuthAuthorizationCodeWhereUniqueInput
    create: XOR<OAuthAuthorizationCodeCreateWithoutClientInput, OAuthAuthorizationCodeUncheckedCreateWithoutClientInput>
  }

  export type OAuthAuthorizationCodeCreateManyClientInputEnvelope = {
    data: OAuthAuthorizationCodeCreateManyClientInput | OAuthAuthorizationCodeCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOauthClientsInput = {
    update: XOR<UserUpdateWithoutOauthClientsInput, UserUncheckedUpdateWithoutOauthClientsInput>
    create: XOR<UserCreateWithoutOauthClientsInput, UserUncheckedCreateWithoutOauthClientsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOauthClientsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOauthClientsInput, UserUncheckedUpdateWithoutOauthClientsInput>
  }

  export type UserUpdateWithoutOauthClientsInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUpdateManyWithoutAuthorNestedInput
    authCodes?: OAuthAuthorizationCodeUpdateManyWithoutUserNestedInput
    accessTokens?: OAuthAccessTokenUpdateManyWithoutUserNestedInput
    refreshTokens?: OAuthRefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOauthClientsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    authCodes?: OAuthAuthorizationCodeUncheckedUpdateManyWithoutUserNestedInput
    accessTokens?: OAuthAccessTokenUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: OAuthRefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OAuthAccessTokenUpsertWithWhereUniqueWithoutClientInput = {
    where: OAuthAccessTokenWhereUniqueInput
    update: XOR<OAuthAccessTokenUpdateWithoutClientInput, OAuthAccessTokenUncheckedUpdateWithoutClientInput>
    create: XOR<OAuthAccessTokenCreateWithoutClientInput, OAuthAccessTokenUncheckedCreateWithoutClientInput>
  }

  export type OAuthAccessTokenUpdateWithWhereUniqueWithoutClientInput = {
    where: OAuthAccessTokenWhereUniqueInput
    data: XOR<OAuthAccessTokenUpdateWithoutClientInput, OAuthAccessTokenUncheckedUpdateWithoutClientInput>
  }

  export type OAuthAccessTokenUpdateManyWithWhereWithoutClientInput = {
    where: OAuthAccessTokenScalarWhereInput
    data: XOR<OAuthAccessTokenUpdateManyMutationInput, OAuthAccessTokenUncheckedUpdateManyWithoutClientInput>
  }

  export type OAuthRefreshTokenUpsertWithWhereUniqueWithoutClientInput = {
    where: OAuthRefreshTokenWhereUniqueInput
    update: XOR<OAuthRefreshTokenUpdateWithoutClientInput, OAuthRefreshTokenUncheckedUpdateWithoutClientInput>
    create: XOR<OAuthRefreshTokenCreateWithoutClientInput, OAuthRefreshTokenUncheckedCreateWithoutClientInput>
  }

  export type OAuthRefreshTokenUpdateWithWhereUniqueWithoutClientInput = {
    where: OAuthRefreshTokenWhereUniqueInput
    data: XOR<OAuthRefreshTokenUpdateWithoutClientInput, OAuthRefreshTokenUncheckedUpdateWithoutClientInput>
  }

  export type OAuthRefreshTokenUpdateManyWithWhereWithoutClientInput = {
    where: OAuthRefreshTokenScalarWhereInput
    data: XOR<OAuthRefreshTokenUpdateManyMutationInput, OAuthRefreshTokenUncheckedUpdateManyWithoutClientInput>
  }

  export type OAuthAuthorizationCodeUpsertWithWhereUniqueWithoutClientInput = {
    where: OAuthAuthorizationCodeWhereUniqueInput
    update: XOR<OAuthAuthorizationCodeUpdateWithoutClientInput, OAuthAuthorizationCodeUncheckedUpdateWithoutClientInput>
    create: XOR<OAuthAuthorizationCodeCreateWithoutClientInput, OAuthAuthorizationCodeUncheckedCreateWithoutClientInput>
  }

  export type OAuthAuthorizationCodeUpdateWithWhereUniqueWithoutClientInput = {
    where: OAuthAuthorizationCodeWhereUniqueInput
    data: XOR<OAuthAuthorizationCodeUpdateWithoutClientInput, OAuthAuthorizationCodeUncheckedUpdateWithoutClientInput>
  }

  export type OAuthAuthorizationCodeUpdateManyWithWhereWithoutClientInput = {
    where: OAuthAuthorizationCodeScalarWhereInput
    data: XOR<OAuthAuthorizationCodeUpdateManyMutationInput, OAuthAuthorizationCodeUncheckedUpdateManyWithoutClientInput>
  }

  export type OAuthClientCreateWithoutAuthorizationCodesInput = {
    clientId: string
    clientSecret: string
    redirectUris?: OAuthClientCreateredirectUrisInput | string[]
    grants?: OAuthClientCreategrantsInput | string[]
    user?: UserCreateNestedOneWithoutOauthClientsInput
    accessTokens?: OAuthAccessTokenCreateNestedManyWithoutClientInput
    refreshTokens?: OAuthRefreshTokenCreateNestedManyWithoutClientInput
  }

  export type OAuthClientUncheckedCreateWithoutAuthorizationCodesInput = {
    id?: number
    clientId: string
    clientSecret: string
    redirectUris?: OAuthClientCreateredirectUrisInput | string[]
    grants?: OAuthClientCreategrantsInput | string[]
    userId?: number | null
    accessTokens?: OAuthAccessTokenUncheckedCreateNestedManyWithoutClientInput
    refreshTokens?: OAuthRefreshTokenUncheckedCreateNestedManyWithoutClientInput
  }

  export type OAuthClientCreateOrConnectWithoutAuthorizationCodesInput = {
    where: OAuthClientWhereUniqueInput
    create: XOR<OAuthClientCreateWithoutAuthorizationCodesInput, OAuthClientUncheckedCreateWithoutAuthorizationCodesInput>
  }

  export type UserCreateWithoutAuthCodesInput = {
    email: string
    username?: string | null
    password?: string | null
    bio?: string | null
    posts?: PostCreateNestedManyWithoutAuthorInput
    oauthClients?: OAuthClientCreateNestedManyWithoutUserInput
    accessTokens?: OAuthAccessTokenCreateNestedManyWithoutUserInput
    refreshTokens?: OAuthRefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAuthCodesInput = {
    id?: number
    email: string
    username?: string | null
    password?: string | null
    bio?: string | null
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    oauthClients?: OAuthClientUncheckedCreateNestedManyWithoutUserInput
    accessTokens?: OAuthAccessTokenUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: OAuthRefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAuthCodesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuthCodesInput, UserUncheckedCreateWithoutAuthCodesInput>
  }

  export type OAuthClientUpsertWithoutAuthorizationCodesInput = {
    update: XOR<OAuthClientUpdateWithoutAuthorizationCodesInput, OAuthClientUncheckedUpdateWithoutAuthorizationCodesInput>
    create: XOR<OAuthClientCreateWithoutAuthorizationCodesInput, OAuthClientUncheckedCreateWithoutAuthorizationCodesInput>
    where?: OAuthClientWhereInput
  }

  export type OAuthClientUpdateToOneWithWhereWithoutAuthorizationCodesInput = {
    where?: OAuthClientWhereInput
    data: XOR<OAuthClientUpdateWithoutAuthorizationCodesInput, OAuthClientUncheckedUpdateWithoutAuthorizationCodesInput>
  }

  export type OAuthClientUpdateWithoutAuthorizationCodesInput = {
    clientId?: StringFieldUpdateOperationsInput | string
    clientSecret?: StringFieldUpdateOperationsInput | string
    redirectUris?: OAuthClientUpdateredirectUrisInput | string[]
    grants?: OAuthClientUpdategrantsInput | string[]
    user?: UserUpdateOneWithoutOauthClientsNestedInput
    accessTokens?: OAuthAccessTokenUpdateManyWithoutClientNestedInput
    refreshTokens?: OAuthRefreshTokenUpdateManyWithoutClientNestedInput
  }

  export type OAuthClientUncheckedUpdateWithoutAuthorizationCodesInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: StringFieldUpdateOperationsInput | string
    clientSecret?: StringFieldUpdateOperationsInput | string
    redirectUris?: OAuthClientUpdateredirectUrisInput | string[]
    grants?: OAuthClientUpdategrantsInput | string[]
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    accessTokens?: OAuthAccessTokenUncheckedUpdateManyWithoutClientNestedInput
    refreshTokens?: OAuthRefreshTokenUncheckedUpdateManyWithoutClientNestedInput
  }

  export type UserUpsertWithoutAuthCodesInput = {
    update: XOR<UserUpdateWithoutAuthCodesInput, UserUncheckedUpdateWithoutAuthCodesInput>
    create: XOR<UserCreateWithoutAuthCodesInput, UserUncheckedCreateWithoutAuthCodesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuthCodesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuthCodesInput, UserUncheckedUpdateWithoutAuthCodesInput>
  }

  export type UserUpdateWithoutAuthCodesInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUpdateManyWithoutAuthorNestedInput
    oauthClients?: OAuthClientUpdateManyWithoutUserNestedInput
    accessTokens?: OAuthAccessTokenUpdateManyWithoutUserNestedInput
    refreshTokens?: OAuthRefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAuthCodesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    oauthClients?: OAuthClientUncheckedUpdateManyWithoutUserNestedInput
    accessTokens?: OAuthAccessTokenUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: OAuthRefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OAuthClientCreateWithoutAccessTokensInput = {
    clientId: string
    clientSecret: string
    redirectUris?: OAuthClientCreateredirectUrisInput | string[]
    grants?: OAuthClientCreategrantsInput | string[]
    user?: UserCreateNestedOneWithoutOauthClientsInput
    refreshTokens?: OAuthRefreshTokenCreateNestedManyWithoutClientInput
    authorizationCodes?: OAuthAuthorizationCodeCreateNestedManyWithoutClientInput
  }

  export type OAuthClientUncheckedCreateWithoutAccessTokensInput = {
    id?: number
    clientId: string
    clientSecret: string
    redirectUris?: OAuthClientCreateredirectUrisInput | string[]
    grants?: OAuthClientCreategrantsInput | string[]
    userId?: number | null
    refreshTokens?: OAuthRefreshTokenUncheckedCreateNestedManyWithoutClientInput
    authorizationCodes?: OAuthAuthorizationCodeUncheckedCreateNestedManyWithoutClientInput
  }

  export type OAuthClientCreateOrConnectWithoutAccessTokensInput = {
    where: OAuthClientWhereUniqueInput
    create: XOR<OAuthClientCreateWithoutAccessTokensInput, OAuthClientUncheckedCreateWithoutAccessTokensInput>
  }

  export type UserCreateWithoutAccessTokensInput = {
    email: string
    username?: string | null
    password?: string | null
    bio?: string | null
    posts?: PostCreateNestedManyWithoutAuthorInput
    oauthClients?: OAuthClientCreateNestedManyWithoutUserInput
    authCodes?: OAuthAuthorizationCodeCreateNestedManyWithoutUserInput
    refreshTokens?: OAuthRefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccessTokensInput = {
    id?: number
    email: string
    username?: string | null
    password?: string | null
    bio?: string | null
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    oauthClients?: OAuthClientUncheckedCreateNestedManyWithoutUserInput
    authCodes?: OAuthAuthorizationCodeUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: OAuthRefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccessTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccessTokensInput, UserUncheckedCreateWithoutAccessTokensInput>
  }

  export type OAuthClientUpsertWithoutAccessTokensInput = {
    update: XOR<OAuthClientUpdateWithoutAccessTokensInput, OAuthClientUncheckedUpdateWithoutAccessTokensInput>
    create: XOR<OAuthClientCreateWithoutAccessTokensInput, OAuthClientUncheckedCreateWithoutAccessTokensInput>
    where?: OAuthClientWhereInput
  }

  export type OAuthClientUpdateToOneWithWhereWithoutAccessTokensInput = {
    where?: OAuthClientWhereInput
    data: XOR<OAuthClientUpdateWithoutAccessTokensInput, OAuthClientUncheckedUpdateWithoutAccessTokensInput>
  }

  export type OAuthClientUpdateWithoutAccessTokensInput = {
    clientId?: StringFieldUpdateOperationsInput | string
    clientSecret?: StringFieldUpdateOperationsInput | string
    redirectUris?: OAuthClientUpdateredirectUrisInput | string[]
    grants?: OAuthClientUpdategrantsInput | string[]
    user?: UserUpdateOneWithoutOauthClientsNestedInput
    refreshTokens?: OAuthRefreshTokenUpdateManyWithoutClientNestedInput
    authorizationCodes?: OAuthAuthorizationCodeUpdateManyWithoutClientNestedInput
  }

  export type OAuthClientUncheckedUpdateWithoutAccessTokensInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: StringFieldUpdateOperationsInput | string
    clientSecret?: StringFieldUpdateOperationsInput | string
    redirectUris?: OAuthClientUpdateredirectUrisInput | string[]
    grants?: OAuthClientUpdategrantsInput | string[]
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    refreshTokens?: OAuthRefreshTokenUncheckedUpdateManyWithoutClientNestedInput
    authorizationCodes?: OAuthAuthorizationCodeUncheckedUpdateManyWithoutClientNestedInput
  }

  export type UserUpsertWithoutAccessTokensInput = {
    update: XOR<UserUpdateWithoutAccessTokensInput, UserUncheckedUpdateWithoutAccessTokensInput>
    create: XOR<UserCreateWithoutAccessTokensInput, UserUncheckedCreateWithoutAccessTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccessTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccessTokensInput, UserUncheckedUpdateWithoutAccessTokensInput>
  }

  export type UserUpdateWithoutAccessTokensInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUpdateManyWithoutAuthorNestedInput
    oauthClients?: OAuthClientUpdateManyWithoutUserNestedInput
    authCodes?: OAuthAuthorizationCodeUpdateManyWithoutUserNestedInput
    refreshTokens?: OAuthRefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccessTokensInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    oauthClients?: OAuthClientUncheckedUpdateManyWithoutUserNestedInput
    authCodes?: OAuthAuthorizationCodeUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: OAuthRefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OAuthClientCreateWithoutRefreshTokensInput = {
    clientId: string
    clientSecret: string
    redirectUris?: OAuthClientCreateredirectUrisInput | string[]
    grants?: OAuthClientCreategrantsInput | string[]
    user?: UserCreateNestedOneWithoutOauthClientsInput
    accessTokens?: OAuthAccessTokenCreateNestedManyWithoutClientInput
    authorizationCodes?: OAuthAuthorizationCodeCreateNestedManyWithoutClientInput
  }

  export type OAuthClientUncheckedCreateWithoutRefreshTokensInput = {
    id?: number
    clientId: string
    clientSecret: string
    redirectUris?: OAuthClientCreateredirectUrisInput | string[]
    grants?: OAuthClientCreategrantsInput | string[]
    userId?: number | null
    accessTokens?: OAuthAccessTokenUncheckedCreateNestedManyWithoutClientInput
    authorizationCodes?: OAuthAuthorizationCodeUncheckedCreateNestedManyWithoutClientInput
  }

  export type OAuthClientCreateOrConnectWithoutRefreshTokensInput = {
    where: OAuthClientWhereUniqueInput
    create: XOR<OAuthClientCreateWithoutRefreshTokensInput, OAuthClientUncheckedCreateWithoutRefreshTokensInput>
  }

  export type UserCreateWithoutRefreshTokensInput = {
    email: string
    username?: string | null
    password?: string | null
    bio?: string | null
    posts?: PostCreateNestedManyWithoutAuthorInput
    oauthClients?: OAuthClientCreateNestedManyWithoutUserInput
    authCodes?: OAuthAuthorizationCodeCreateNestedManyWithoutUserInput
    accessTokens?: OAuthAccessTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRefreshTokensInput = {
    id?: number
    email: string
    username?: string | null
    password?: string | null
    bio?: string | null
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    oauthClients?: OAuthClientUncheckedCreateNestedManyWithoutUserInput
    authCodes?: OAuthAuthorizationCodeUncheckedCreateNestedManyWithoutUserInput
    accessTokens?: OAuthAccessTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRefreshTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
  }

  export type OAuthClientUpsertWithoutRefreshTokensInput = {
    update: XOR<OAuthClientUpdateWithoutRefreshTokensInput, OAuthClientUncheckedUpdateWithoutRefreshTokensInput>
    create: XOR<OAuthClientCreateWithoutRefreshTokensInput, OAuthClientUncheckedCreateWithoutRefreshTokensInput>
    where?: OAuthClientWhereInput
  }

  export type OAuthClientUpdateToOneWithWhereWithoutRefreshTokensInput = {
    where?: OAuthClientWhereInput
    data: XOR<OAuthClientUpdateWithoutRefreshTokensInput, OAuthClientUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type OAuthClientUpdateWithoutRefreshTokensInput = {
    clientId?: StringFieldUpdateOperationsInput | string
    clientSecret?: StringFieldUpdateOperationsInput | string
    redirectUris?: OAuthClientUpdateredirectUrisInput | string[]
    grants?: OAuthClientUpdategrantsInput | string[]
    user?: UserUpdateOneWithoutOauthClientsNestedInput
    accessTokens?: OAuthAccessTokenUpdateManyWithoutClientNestedInput
    authorizationCodes?: OAuthAuthorizationCodeUpdateManyWithoutClientNestedInput
  }

  export type OAuthClientUncheckedUpdateWithoutRefreshTokensInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: StringFieldUpdateOperationsInput | string
    clientSecret?: StringFieldUpdateOperationsInput | string
    redirectUris?: OAuthClientUpdateredirectUrisInput | string[]
    grants?: OAuthClientUpdategrantsInput | string[]
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    accessTokens?: OAuthAccessTokenUncheckedUpdateManyWithoutClientNestedInput
    authorizationCodes?: OAuthAuthorizationCodeUncheckedUpdateManyWithoutClientNestedInput
  }

  export type UserUpsertWithoutRefreshTokensInput = {
    update: XOR<UserUpdateWithoutRefreshTokensInput, UserUncheckedUpdateWithoutRefreshTokensInput>
    create: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRefreshTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRefreshTokensInput, UserUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type UserUpdateWithoutRefreshTokensInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUpdateManyWithoutAuthorNestedInput
    oauthClients?: OAuthClientUpdateManyWithoutUserNestedInput
    authCodes?: OAuthAuthorizationCodeUpdateManyWithoutUserNestedInput
    accessTokens?: OAuthAccessTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRefreshTokensInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    oauthClients?: OAuthClientUncheckedUpdateManyWithoutUserNestedInput
    authCodes?: OAuthAuthorizationCodeUncheckedUpdateManyWithoutUserNestedInput
    accessTokens?: OAuthAccessTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PostCreateManyAuthorInput = {
    id?: number
    title: string
    content?: string | null
    published?: boolean
  }

  export type OAuthClientCreateManyUserInput = {
    id?: number
    clientId: string
    clientSecret: string
    redirectUris?: OAuthClientCreateredirectUrisInput | string[]
    grants?: OAuthClientCreategrantsInput | string[]
  }

  export type OAuthAuthorizationCodeCreateManyUserInput = {
    id?: number
    code: string
    expiresAt: Date | string
    redirectUri: string
    scope?: string | null
    clientId: number
  }

  export type OAuthAccessTokenCreateManyUserInput = {
    id?: number
    accessToken: string
    expiresAt: Date | string
    scope?: string | null
    clientId: number
  }

  export type OAuthRefreshTokenCreateManyUserInput = {
    id?: number
    refreshToken: string
    expiresAt: Date | string
    scope?: string | null
    clientId: number
  }

  export type PostUpdateWithoutAuthorInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PostUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PostUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OAuthClientUpdateWithoutUserInput = {
    clientId?: StringFieldUpdateOperationsInput | string
    clientSecret?: StringFieldUpdateOperationsInput | string
    redirectUris?: OAuthClientUpdateredirectUrisInput | string[]
    grants?: OAuthClientUpdategrantsInput | string[]
    accessTokens?: OAuthAccessTokenUpdateManyWithoutClientNestedInput
    refreshTokens?: OAuthRefreshTokenUpdateManyWithoutClientNestedInput
    authorizationCodes?: OAuthAuthorizationCodeUpdateManyWithoutClientNestedInput
  }

  export type OAuthClientUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: StringFieldUpdateOperationsInput | string
    clientSecret?: StringFieldUpdateOperationsInput | string
    redirectUris?: OAuthClientUpdateredirectUrisInput | string[]
    grants?: OAuthClientUpdategrantsInput | string[]
    accessTokens?: OAuthAccessTokenUncheckedUpdateManyWithoutClientNestedInput
    refreshTokens?: OAuthRefreshTokenUncheckedUpdateManyWithoutClientNestedInput
    authorizationCodes?: OAuthAuthorizationCodeUncheckedUpdateManyWithoutClientNestedInput
  }

  export type OAuthClientUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: StringFieldUpdateOperationsInput | string
    clientSecret?: StringFieldUpdateOperationsInput | string
    redirectUris?: OAuthClientUpdateredirectUrisInput | string[]
    grants?: OAuthClientUpdategrantsInput | string[]
  }

  export type OAuthAuthorizationCodeUpdateWithoutUserInput = {
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    redirectUri?: StringFieldUpdateOperationsInput | string
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    client?: OAuthClientUpdateOneRequiredWithoutAuthorizationCodesNestedInput
  }

  export type OAuthAuthorizationCodeUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    redirectUri?: StringFieldUpdateOperationsInput | string
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: IntFieldUpdateOperationsInput | number
  }

  export type OAuthAuthorizationCodeUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    redirectUri?: StringFieldUpdateOperationsInput | string
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: IntFieldUpdateOperationsInput | number
  }

  export type OAuthAccessTokenUpdateWithoutUserInput = {
    accessToken?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    client?: OAuthClientUpdateOneRequiredWithoutAccessTokensNestedInput
  }

  export type OAuthAccessTokenUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    accessToken?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: IntFieldUpdateOperationsInput | number
  }

  export type OAuthAccessTokenUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    accessToken?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: IntFieldUpdateOperationsInput | number
  }

  export type OAuthRefreshTokenUpdateWithoutUserInput = {
    refreshToken?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    client?: OAuthClientUpdateOneRequiredWithoutRefreshTokensNestedInput
  }

  export type OAuthRefreshTokenUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    refreshToken?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: IntFieldUpdateOperationsInput | number
  }

  export type OAuthRefreshTokenUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    refreshToken?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: IntFieldUpdateOperationsInput | number
  }

  export type OAuthAccessTokenCreateManyClientInput = {
    id?: number
    accessToken: string
    expiresAt: Date | string
    scope?: string | null
    userId: number
  }

  export type OAuthRefreshTokenCreateManyClientInput = {
    id?: number
    refreshToken: string
    expiresAt: Date | string
    scope?: string | null
    userId: number
  }

  export type OAuthAuthorizationCodeCreateManyClientInput = {
    id?: number
    code: string
    expiresAt: Date | string
    redirectUri: string
    scope?: string | null
    userId: number
  }

  export type OAuthAccessTokenUpdateWithoutClientInput = {
    accessToken?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccessTokensNestedInput
  }

  export type OAuthAccessTokenUncheckedUpdateWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    accessToken?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type OAuthAccessTokenUncheckedUpdateManyWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    accessToken?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type OAuthRefreshTokenUpdateWithoutClientInput = {
    refreshToken?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutRefreshTokensNestedInput
  }

  export type OAuthRefreshTokenUncheckedUpdateWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    refreshToken?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type OAuthRefreshTokenUncheckedUpdateManyWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    refreshToken?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type OAuthAuthorizationCodeUpdateWithoutClientInput = {
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    redirectUri?: StringFieldUpdateOperationsInput | string
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAuthCodesNestedInput
  }

  export type OAuthAuthorizationCodeUncheckedUpdateWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    redirectUri?: StringFieldUpdateOperationsInput | string
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type OAuthAuthorizationCodeUncheckedUpdateManyWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    redirectUri?: StringFieldUpdateOperationsInput | string
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
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