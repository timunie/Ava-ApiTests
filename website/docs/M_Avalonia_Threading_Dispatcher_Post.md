# Post(Action, DispatcherPriority) Method


Posts an action that will be invoked on the dispatcher thread.



## Definition
**Namespace:** <a href="N_Avalonia_Threading">Avalonia.Threading</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public void Post(
	Action action,
	DispatcherPriority priority = default
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub Post ( 
	action As Action,
	Optional priority As DispatcherPriority = Nothing
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract Post : 
        action : Action * 
        ?priority : DispatcherPriority 
(* Defaults:
        let _priority = defaultArg priority new DispatcherPriority()
*)
-> unit 
override Post : 
        action : Action * 
        ?priority : DispatcherPriority 
(* Defaults:
        let _priority = defaultArg priority new DispatcherPriority()
*)
-> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Threading/Dispatcher.Invoke.cs#L546" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.action" target="_blank" rel="noopener noreferrer">Action</a></dt><dd>The method.</dd><dt>  <a href="T_Avalonia_Threading_DispatcherPriority">DispatcherPriority</a>  (Optional)</dt><dd>The priority with which to invoke the method.</dd></dl>

#### Implements
<a href="M_Avalonia_Threading_IDispatcher_Post">IDispatcher.Post(Action, DispatcherPriority)</a>  


## See Also


#### Reference
<a href="T_Avalonia_Threading_Dispatcher">Dispatcher Class</a>  
<a href="Overload_Avalonia_Threading_Dispatcher_Post">Post Overload</a>  
<a href="N_Avalonia_Threading">Avalonia.Threading Namespace</a>  

