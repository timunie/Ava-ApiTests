# RequestCatch Property


Gets or sets whether the exception should be caught and the event handlers called..



## Definition
**Namespace:** <a href="N_Avalonia_Threading">Avalonia.Threading</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public bool RequestCatch { get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property RequestCatch As Boolean
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member RequestCatch : bool with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Threading/DispatcherUnhandledExceptionFilterEventArgs.cs#L47" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>

## Remarks
A filter handler can set this property to false to request that the exception not be caught, to avoid the callstack getting unwound up to the Dispatcher. 

 A previous handler in the event multicast might have already set this property to false, signalling that the exception will not be caught. We let the "don't catch" behavior override all others because it most likely means a debugging scenario.

## See Also


#### Reference
<a href="T_Avalonia_Threading_DispatcherUnhandledExceptionFilterEventArgs">DispatcherUnhandledExceptionFilterEventArgs Class</a>  
<a href="N_Avalonia_Threading">Avalonia.Threading Namespace</a>  

