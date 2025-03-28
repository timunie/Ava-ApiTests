# Dispatcher Class


Provides services for managing work items on a thread.



## Definition
**Namespace:** <a href="N_Avalonia_Threading">Avalonia.Threading</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class Dispatcher : IDispatcher
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class Dispatcher
	Implements IDispatcher
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type Dispatcher = 
    class
        interface IDispatcher
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Threading/Dispatcher.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  Dispatcher</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Threading_IDispatcher">IDispatcher</a></td></tr>
</table>



## Remarks
In Avalonia, there is usually only a single Dispatcher in the application - the one for the UI thread, retrieved via the <a href="P_Avalonia_Threading_Dispatcher_UIThread">UIThread</a> property.

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Threading_Dispatcher_SupportsRunLoops">SupportsRunLoops</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Threading_Dispatcher_UIThread">UIThread</a></td>
<td> </td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Threading_Dispatcher_AwaitWithPriority">AwaitWithPriority(Task, DispatcherPriority)</a></td>
<td>Returns a task awaitable that would invoke continuation on specified dispatcher priority</td>
</tr>
<tr>
<td><a href="M_Avalonia_Threading_Dispatcher_AwaitWithPriority__1">AwaitWithPriority(T)(Task(T), DispatcherPriority)</a></td>
<td>Returns a task awaitable that would invoke continuation on specified dispatcher priority</td>
</tr>
<tr>
<td><a href="M_Avalonia_Threading_Dispatcher_BeginInvokeShutdown">BeginInvokeShutdown(DispatcherPriority)</a></td>
<td>Begins the process of shutting down the dispatcher.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Threading_Dispatcher_CheckAccess">CheckAccess()</a></td>
<td>Checks that the current thread is the UI thread.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Threading_Dispatcher_DisableProcessing">DisableProcessing()</a></td>
<td>Disable the event processing of the dispatcher.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Equals(Object)</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Threading_Dispatcher_ExitAllFrames">ExitAllFrames()</a></td>
<td>Requests that all nested frames exit.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.finalize" target="_blank" rel="noopener noreferrer">Finalize()</a></td>
<td>Allows an object to try to free resources and perform other cleanup operations before it is reclaimed by garbage collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode" target="_blank" rel="noopener noreferrer">GetHashCode()</a></td>
<td>Serves as the default hash function.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Threading_Dispatcher_HasJobsWithPriority">HasJobsWithPriority(DispatcherPriority)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Threading_Dispatcher_Invoke_3">Invoke(Action)</a></td>
<td>Executes the specified Action synchronously on the thread that the Dispatcher was created on.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Threading_Dispatcher_Invoke_2">Invoke(Action, DispatcherPriority)</a></td>
<td>Executes the specified Action synchronously on the thread that the Dispatcher was created on.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Threading_Dispatcher_Invoke_1">Invoke(Action, DispatcherPriority, CancellationToken)</a></td>
<td>Executes the specified Action synchronously on the thread that the Dispatcher was created on.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Threading_Dispatcher_Invoke">Invoke(Action, DispatcherPriority, CancellationToken, TimeSpan)</a></td>
<td>Executes the specified Action synchronously on the thread that the Dispatcher was created on.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Threading_Dispatcher_Invoke__1_3">Invoke(TResult)(Func(TResult))</a></td>
<td>Executes the specified Func&lt;TResult&gt; synchronously on the thread that the Dispatcher was created on.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Threading_Dispatcher_Invoke__1_2">Invoke(TResult)(Func(TResult), DispatcherPriority)</a></td>
<td>Executes the specified Func&lt;TResult&gt; synchronously on the thread that the Dispatcher was created on.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Threading_Dispatcher_Invoke__1_1">Invoke(TResult)(Func(TResult), DispatcherPriority, CancellationToken)</a></td>
<td>Executes the specified Func&lt;TResult&gt; synchronously on the thread that the Dispatcher was created on.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Threading_Dispatcher_Invoke__1">Invoke(TResult)(Func(TResult), DispatcherPriority, CancellationToken, TimeSpan)</a></td>
<td>Executes the specified Func&lt;TResult&gt; synchronously on the thread that the Dispatcher was created on.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Threading_Dispatcher_InvokeAsync_2">InvokeAsync(Action)</a></td>
<td>Executes the specified Action asynchronously on the thread that the Dispatcher was created on.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Threading_Dispatcher_InvokeAsync_4">InvokeAsync(Func(Task))</a></td>
<td>Executes the specified Func&lt;Task&gt; asynchronously on the thread that the Dispatcher was created on</td>
</tr>
<tr>
<td><a href="M_Avalonia_Threading_Dispatcher_InvokeAsync_1">InvokeAsync(Action, DispatcherPriority)</a></td>
<td>Executes the specified Action asynchronously on the thread that the Dispatcher was created on.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Threading_Dispatcher_InvokeAsync_3">InvokeAsync(Func(Task), DispatcherPriority)</a></td>
<td>Executes the specified Func&lt;Task&gt; asynchronously on the thread that the Dispatcher was created on</td>
</tr>
<tr>
<td><a href="M_Avalonia_Threading_Dispatcher_InvokeAsync">InvokeAsync(Action, DispatcherPriority, CancellationToken)</a></td>
<td>Executes the specified Action asynchronously on the thread that the Dispatcher was created on.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Threading_Dispatcher_InvokeAsync__1_4">InvokeAsync(TResult)(Func(TResult))</a></td>
<td>Executes the specified Func&lt;TResult&gt; asynchronously on the thread that the Dispatcher was created on.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Threading_Dispatcher_InvokeAsync__1_1">InvokeAsync(TResult)(Func(Task(TResult)))</a></td>
<td>Executes the specified Func&lt;Task&lt;TResult&gt;&gt; asynchronously on the thread that the Dispatcher was created on</td>
</tr>
<tr>
<td><a href="M_Avalonia_Threading_Dispatcher_InvokeAsync__1_3">InvokeAsync(TResult)(Func(TResult), DispatcherPriority)</a></td>
<td>Executes the specified Func&lt;TResult&gt; asynchronously on the thread that the Dispatcher was created on.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Threading_Dispatcher_InvokeAsync__1">InvokeAsync(TResult)(Func(Task(TResult)), DispatcherPriority)</a></td>
<td>Executes the specified Func&lt;Task&lt;TResult&gt;&gt; asynchronously on the thread that the Dispatcher was created on</td>
</tr>
<tr>
<td><a href="M_Avalonia_Threading_Dispatcher_InvokeAsync__1_2">InvokeAsync(TResult)(Func(TResult), DispatcherPriority, CancellationToken)</a></td>
<td>Executes the specified Func&lt;TResult&gt; asynchronously on the thread that the Dispatcher was created on.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Threading_Dispatcher_InvokeShutdown">InvokeShutdown()</a></td>
<td>Initiates the shutdown process of the Dispatcher synchronously.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Threading_Dispatcher_MainLoop">MainLoop(CancellationToken)</a></td>
<td>Runs the dispatcher's main loop.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Threading_Dispatcher_Post">Post(Action, DispatcherPriority)</a></td>
<td>Posts an action that will be invoked on the dispatcher thread.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Threading_Dispatcher_Post_1">Post(SendOrPostCallback, Object, DispatcherPriority)</a></td>
<td>Posts an action that will be invoked on the dispatcher thread.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Threading_Dispatcher_PushFrame">PushFrame(DispatcherFrame)</a></td>
<td>Push an execution frame.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Threading_Dispatcher_RunJobs">RunJobs(Nullable(DispatcherPriority))</a></td>
<td>Force-runs all dispatcher operations ignoring any pending OS events, use with caution</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Threading_Dispatcher_VerifyAccess">VerifyAccess()</a></td>
<td>Checks that the current thread is the UI thread and throws if not.</td>
</tr>
</table>

## Events
<table>
<tr>
<td><a href="E_Avalonia_Threading_Dispatcher_ShutdownFinished">ShutdownFinished</a></td>
<td>Raised when the dispatcher is shut down.</td>
</tr>
<tr>
<td><a href="E_Avalonia_Threading_Dispatcher_ShutdownStarted">ShutdownStarted</a></td>
<td>Raised when the dispatcher is shutting down.</td>
</tr>
<tr>
<td><a href="E_Avalonia_Threading_Dispatcher_UnhandledException">UnhandledException</a></td>
<td>Occurs when a thread exception is thrown and uncaught during execution of a delegate by way of <a href="M_Avalonia_Threading_Dispatcher_Invoke_3">Invoke(Action)</a> or <a href="M_Avalonia_Threading_Dispatcher_InvokeAsync_2">InvokeAsync(Action)</a>.</td>
</tr>
<tr>
<td><a href="E_Avalonia_Threading_Dispatcher_UnhandledExceptionFilter">UnhandledExceptionFilter</a></td>
<td>Occurs when a thread exception is thrown and uncaught during execution of a delegate by way of <a href="M_Avalonia_Threading_Dispatcher_Invoke_3">Invoke(Action)</a> or <a href="M_Avalonia_Threading_Dispatcher_InvokeAsync_2">InvokeAsync(Action)</a> when in the filter stage.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Threading">Avalonia.Threading Namespace</a>  

