# Wait Method




## Definition
**Namespace:** <a href="N_Avalonia_Threading">Avalonia.Threading</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public override int Wait(
	IntPtr[] waitHandles,
	bool waitAll,
	int millisecondsTimeout
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Overrides Function Wait ( 
	waitHandles As IntPtr(),
	waitAll As Boolean,
	millisecondsTimeout As Integer
) As Integer
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract Wait : 
        waitHandles : IntPtr[] * 
        waitAll : bool * 
        millisecondsTimeout : int -> int 
override Wait : 
        waitHandles : IntPtr[] * 
        waitAll : bool * 
        millisecondsTimeout : int -> int 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Threading/AvaloniaSynchronizationContext.cs#L82" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.intptr" target="_blank" rel="noopener noreferrer">IntPtr</a>[]</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a>

## See Also


#### Reference
<a href="T_Avalonia_Threading_AvaloniaSynchronizationContext">AvaloniaSynchronizationContext Class</a>  
<a href="N_Avalonia_Threading">Avalonia.Threading Namespace</a>  

