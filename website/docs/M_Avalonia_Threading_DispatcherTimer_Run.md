# Run Method


Starts a new timer.



## Definition
**Namespace:** <a href="N_Avalonia_Threading">Avalonia.Threading</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static IDisposable Run(
	Func<bool> action,
	TimeSpan interval,
	DispatcherPriority priority = default
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function Run ( 
	action As Func(Of Boolean),
	interval As TimeSpan,
	Optional priority As DispatcherPriority = Nothing
) As IDisposable
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member Run : 
        action : Func<bool> * 
        interval : TimeSpan * 
        ?priority : DispatcherPriority 
(* Defaults:
        let _priority = defaultArg priority new DispatcherPriority()
*)
-> IDisposable 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Threading/DispatcherTimer.cs#L196" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.func-1" target="_blank" rel="noopener noreferrer">Func</a>(<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>)</dt><dd>The method to call on timer tick. If the method returns false, the timer will stop.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.timespan" target="_blank" rel="noopener noreferrer">TimeSpan</a></dt><dd>The interval at which to tick.</dd><dt>  <a href="T_Avalonia_Threading_DispatcherPriority">DispatcherPriority</a>  (Optional)</dt><dd>The priority to use.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a>  
An <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a> used to cancel the timer.

## See Also


#### Reference
<a href="T_Avalonia_Threading_DispatcherTimer">DispatcherTimer Class</a>  
<a href="N_Avalonia_Threading">Avalonia.Threading Namespace</a>  

