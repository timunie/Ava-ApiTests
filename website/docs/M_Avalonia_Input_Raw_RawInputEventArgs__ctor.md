# RawInputEventArgs Constructor


Initializes a new instance of the <a href="T_Avalonia_Input_Raw_RawInputEventArgs">RawInputEventArgs</a> class.



## Definition
**Namespace:** <a href="N_Avalonia_Input_Raw">Avalonia.Input.Raw</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public RawInputEventArgs(
	IInputDevice device,
	ulong timestamp,
	IInputRoot root
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub New ( 
	device As IInputDevice,
	timestamp As ULong,
	root As IInputRoot
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
new : 
        device : IInputDevice * 
        timestamp : uint64 * 
        root : IInputRoot -> RawInputEventArgs
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Input/Raw/RawInputEventArgs.cs#L24" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Input_IInputDevice">IInputDevice</a></dt><dd>The associated device.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.uint64" target="_blank" rel="noopener noreferrer">UInt64</a></dt><dd>The event timestamp.</dd><dt>  <a href="T_Avalonia_Input_IInputRoot">IInputRoot</a></dt><dd>The root from which the event originates.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Input_Raw_RawInputEventArgs">RawInputEventArgs Class</a>  
<a href="N_Avalonia_Input_Raw">Avalonia.Input.Raw Namespace</a>  
