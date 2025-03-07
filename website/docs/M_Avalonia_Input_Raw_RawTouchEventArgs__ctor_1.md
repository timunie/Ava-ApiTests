# RawTouchEventArgs(IInputDevice, UInt64, IInputRoot, RawPointerEventType, Point, RawInputModifiers, Int64) Constructor


Initializes a new instance of the <a href="T_Avalonia_Input_Raw_RawTouchEventArgs">RawTouchEventArgs</a> class



## Definition
**Namespace:** <a href="N_Avalonia_Input_Raw">Avalonia.Input.Raw</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public RawTouchEventArgs(
	IInputDevice device,
	ulong timestamp,
	IInputRoot root,
	RawPointerEventType type,
	Point position,
	RawInputModifiers inputModifiers,
	long rawPointerId
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
	inputModifiers As RawInputModifiers,
	rawPointerId As Long
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
        inputModifiers : RawInputModifiers * 
        rawPointerId : int64 -> RawTouchEventArgs
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Input/Raw/RawTouchEventArgs.cs#L12" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Input_IInputDevice">IInputDevice</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.uint64" target="_blank" rel="noopener noreferrer">UInt64</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Input_IInputRoot">IInputRoot</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Input_Raw_RawPointerEventType">RawPointerEventType</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Point">Point</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Input_RawInputModifiers">RawInputModifiers</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int64" target="_blank" rel="noopener noreferrer">Int64</a></dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Input_Raw_RawTouchEventArgs">RawTouchEventArgs Class</a>  
<a href="Overload_Avalonia_Input_Raw_RawTouchEventArgs__ctor">RawTouchEventArgs Overload</a>  
<a href="N_Avalonia_Input_Raw">Avalonia.Input.Raw Namespace</a>  
