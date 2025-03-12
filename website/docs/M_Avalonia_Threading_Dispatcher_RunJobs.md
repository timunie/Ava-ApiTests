# RunJobs Method


Force-runs all dispatcher operations ignoring any pending OS events, use with caution



## Definition
**Namespace:** <a href="N_Avalonia_Threading">Avalonia.Threading</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public void RunJobs(
	DispatcherPriority? priority = null
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub RunJobs ( 
	Optional priority As DispatcherPriority? = Nothing
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member RunJobs : 
        ?priority : Nullable<DispatcherPriority> 
(* Defaults:
        let _priority = defaultArg priority null
*)
-> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Threading/Dispatcher.Queue.cs#L49" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.nullable-1" target="_blank" rel="noopener noreferrer">Nullable</a>(<a href="T_Avalonia_Threading_DispatcherPriority">DispatcherPriority</a>)  (Optional)</dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Threading_Dispatcher">Dispatcher Class</a>  
<a href="N_Avalonia_Threading">Avalonia.Threading Namespace</a>  

