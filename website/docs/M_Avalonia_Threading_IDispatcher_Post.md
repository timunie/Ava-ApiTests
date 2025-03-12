# Post Method


Posts an action that will be invoked on the dispatcher thread.



## Definition
**Namespace:** <a href="N_Avalonia_Threading">Avalonia.Threading</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
void Post(
	Action action,
	DispatcherPriority priority = default
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Sub Post ( 
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
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Threading/IDispatcher.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.action" target="_blank" rel="noopener noreferrer">Action</a></dt><dd>The method.</dd><dt>  <a href="T_Avalonia_Threading_DispatcherPriority">DispatcherPriority</a>  (Optional)</dt><dd>The priority with which to invoke the method.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Threading_IDispatcher">IDispatcher Interface</a>  
<a href="N_Avalonia_Threading">Avalonia.Threading Namespace</a>  

