# DispatcherOperation&lt;T&gt; Constructor


Initializes a new instance of the <a href="T_Avalonia_Threading_DispatcherOperation_1">DispatcherOperation(T)</a> class



## Definition
**Namespace:** <a href="N_Avalonia_Threading">Avalonia.Threading</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public DispatcherOperation(
	Dispatcher dispatcher,
	DispatcherPriority priority,
	Func<T> callback
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub New ( 
	dispatcher As Dispatcher,
	priority As DispatcherPriority,
	callback As Func(Of T)
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
new : 
        dispatcher : Dispatcher * 
        priority : DispatcherPriority * 
        callback : Func<'T> -> DispatcherOperation
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Threading/DispatcherOperation.cs#L332" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Threading_Dispatcher">Dispatcher</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Threading_DispatcherPriority">DispatcherPriority</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.func-1" target="_blank" rel="noopener noreferrer">Func</a>(<a href="T_Avalonia_Threading_DispatcherOperation_1">T</a>)</dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Threading_DispatcherOperation_1">DispatcherOperation(T) Class</a>  
<a href="N_Avalonia_Threading">Avalonia.Threading Namespace</a>  

