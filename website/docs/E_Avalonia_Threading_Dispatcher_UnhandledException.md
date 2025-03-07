# UnhandledException Event


Occurs when a thread exception is thrown and uncaught during execution of a delegate by way of <a href="M_Avalonia_Threading_Dispatcher_Invoke_3">Invoke(Action)</a> or <a href="M_Avalonia_Threading_Dispatcher_InvokeAsync_2">InvokeAsync(Action)</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Threading">Avalonia.Threading</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public event DispatcherUnhandledExceptionEventHandler UnhandledException
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Event UnhandledException As DispatcherUnhandledExceptionEventHandler
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member UnhandledException : IEvent<DispatcherUnhandledExceptionEventHandler,
    DispatcherUnhandledExceptionEventArgs>
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Threading/Dispatcher.cs" title="View the source code">View Source</a>



#### Value
<a href="T_Avalonia_Threading_DispatcherUnhandledExceptionEventHandler">DispatcherUnhandledExceptionEventHandler</a>This event is raised when an exception that was thrown during execution of a delegate by way of <a href="M_Avalonia_Threading_Dispatcher_Invoke_3">Invoke(Action)</a> or <a href="M_Avalonia_Threading_Dispatcher_InvokeAsync_2">InvokeAsync(Action)</a> is uncaught. A handler can mark the exception as handled, which will prevent the internal exception handler from being called. Event handlers for this event must be written with care to avoid creating secondary exceptions and to catch any that occur. It is recommended to avoid allocating memory or doing any resource intensive operations in the handler.

## See Also


#### Reference
<a href="T_Avalonia_Threading_Dispatcher">Dispatcher Class</a>  
<a href="N_Avalonia_Threading">Avalonia.Threading Namespace</a>  
