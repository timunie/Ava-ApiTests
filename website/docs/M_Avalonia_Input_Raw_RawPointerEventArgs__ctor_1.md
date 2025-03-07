# RawPointerEventArgs(IInputDevice, UInt64, IInputRoot, RawPointerEventType, Point, RawInputModifiers) Constructor


Initializes a new instance of the <a href="T_Avalonia_Input_Raw_RawPointerEventArgs">RawPointerEventArgs</a> class.



## Definition
**Namespace:** <a href="N_Avalonia_Input_Raw">Avalonia.Input.Raw</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public RawPointerEventArgs(
	IInputDevice device,
	ulong timestamp,
	IInputRoot root,
	RawPointerEventType type,
	Point position,
	RawInputModifiers inputModifiers
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub New ( 
	device As IInputDevice,
	timestamp As ULong,
	root As IInputRoot,
	type As RawPointerEventType,
	position As Point,
	inputModifiers As RawInputModifiers
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
new : 
        device : IInputDevice * 
        timestamp : uint64 * 
        root : IInputRoot * 
        type : RawPointerEventType * 
        position : Point * 
        inputModifiers : RawInputModifiers -> RawPointerEventArgs
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Input/Raw/RawPointerEventArgs.cs#L56" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Input_IInputDevice">IInputDevice</a></dt><dd>The associated device.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.uint64" target="_blank" rel="noopener noreferrer">UInt64</a></dt><dd>The event timestamp.</dd><dt>  <a href="T_Avalonia_Input_IInputRoot">IInputRoot</a></dt><dd>The root from which the event originates.</dd><dt>  <a href="T_Avalonia_Input_Raw_RawPointerEventType">RawPointerEventType</a></dt><dd>The type of the event.</dd><dt>  <a href="T_Avalonia_Point">Point</a></dt><dd>The mouse position, in client DIPs.</dd><dt>  <a href="T_Avalonia_Input_RawInputModifiers">RawInputModifiers</a></dt><dd>The input modifiers.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Input_Raw_RawPointerEventArgs">RawPointerEventArgs Class</a>  
<a href="Overload_Avalonia_Input_Raw_RawPointerEventArgs__ctor">RawPointerEventArgs Overload</a>  
<a href="N_Avalonia_Input_Raw">Avalonia.Input.Raw Namespace</a>  
