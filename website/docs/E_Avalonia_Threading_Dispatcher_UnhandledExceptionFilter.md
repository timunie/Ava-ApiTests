# UnhandledExceptionFilter Event


Occurs when a thread exception is thrown and uncaught during execution of a delegate by way of <a href="M_Avalonia_Threading_Dispatcher_Invoke_3">Invoke(Action)</a> or <a href="M_Avalonia_Threading_Dispatcher_InvokeAsync_2">InvokeAsync(Action)</a> when in the filter stage.



## Definition
**Namespace:** <a href="N_Avalonia_Threading">Avalonia.Threading</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public event DispatcherUnhandledExceptionFilterEventHandler UnhandledExceptionFilter
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Event UnhandledExceptionFilter As DispatcherUnhandledExceptionFilterEventHandler
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member UnhandledExceptionFilter : IEvent<DispatcherUnhandledExceptionFilterEventHandler,
    DispatcherUnhandledExceptionFilterEventArgs>
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Threading/Dispatcher.cs" title="View the source code">View Source</a>



#### Value
<a href="T_Avalonia_Threading_DispatcherUnhandledExceptionFilterEventHandler">DispatcherUnhandledExceptionFilterEventHandler</a>

## Remarks
This event is raised during the filter stage for an exception that is raised during execution of a delegate by way of <a href="M_Avalonia_Threading_Dispatcher_Invoke_3">Invoke(Action)</a> or <a href="M_Avalonia_Threading_Dispatcher_InvokeAsync_2">InvokeAsync(Action)</a> and is uncaught. The call stack is not unwound at this point (first-chance exception). Event handlers for this event must be written with care to avoid creating secondary exceptions and to catch any that occur. It is recommended to avoid allocating memory or doing any resource intensive operations in the handler. The UnhandledExceptionFilter event provides a means to not raise the <a href="E_Avalonia_Threading_Dispatcher_UnhandledException">UnhandledException</a> event. The UnhandledExceptionFilter event is raised first, and If <a href="P_Avalonia_Threading_DispatcherUnhandledExceptionFilterEventArgs_RequestCatch">RequestCatch</a> is set to false, the <a href="E_Avalonia_Threading_Dispatcher_UnhandledException">UnhandledException</a> event will not be raised.

## See Also


#### Reference
<a href="T_Avalonia_Threading_Dispatcher">Dispatcher Class</a>  
<a href="N_Avalonia_Threading">Avalonia.Threading Namespace</a>  

