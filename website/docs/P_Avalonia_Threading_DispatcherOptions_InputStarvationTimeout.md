# InputStarvationTimeout Property


Gets or sets a timeout after which the dispatcher will start prioritizing input events over rendering. The default value is 1 second.



## Definition
**Namespace:** <a href="N_Avalonia_Threading">Avalonia.Threading</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public TimeSpan InputStarvationTimeout { get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property InputStarvationTimeout As TimeSpan
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member InputStarvationTimeout : TimeSpan with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Threading/DispatcherOptions.cs#L20" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.timespan" target="_blank" rel="noopener noreferrer">TimeSpan</a>If no input events are processed within this time, the dispatcher will start prioritizing input events over rendering to prevent the application from becoming unresponsive. This may need to be lowered on resource-constrained platforms where input events are processed on the same thread as rendering.

## See Also


#### Reference
<a href="T_Avalonia_Threading_DispatcherOptions">DispatcherOptions Class</a>  
<a href="N_Avalonia_Threading">Avalonia.Threading Namespace</a>  

