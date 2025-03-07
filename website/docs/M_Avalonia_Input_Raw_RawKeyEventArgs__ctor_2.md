# RawKeyEventArgs(IKeyboardDevice, UInt64, IInputRoot, RawKeyEventType, Key, RawInputModifiers) Constructor
<span>
:::warning[Obsolete]

Note: This API is now obsolete.

:::

</span>

Initializes a new instance of the <a href="T_Avalonia_Input_Raw_RawKeyEventArgs">RawKeyEventArgs</a> class



## Definition
**Namespace:** <a href="N_Avalonia_Input_Raw">Avalonia.Input.Raw</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
[ObsoleteAttribute("Use the overload that takes a physical key and key symbol instead.")]
public RawKeyEventArgs(
	IKeyboardDevice device,
	ulong timestamp,
	IInputRoot root,
	RawKeyEventType type,
	Key key,
	RawInputModifiers modifiers
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<ObsoleteAttribute("Use the overload that takes a physical key and key symbol instead.")>
Public Sub New ( 
	device As IKeyboardDevice,
	timestamp As ULong,
	root As IInputRoot,
	type As RawKeyEventType,
	key As Key,
	modifiers As RawInputModifiers
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<ObsoleteAttribute("Use the overload that takes a physical key and key symbol instead.")>]
new : 
        device : IKeyboardDevice * 
        timestamp : uint64 * 
        root : IInputRoot * 
        type : RawKeyEventType * 
        key : Key * 
        modifiers : RawInputModifiers -> RawKeyEventArgs
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Input/Raw/RawKeyEventArgs.cs#L23" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Input_IKeyboardDevice">IKeyboardDevice</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.uint64" target="_blank" rel="noopener noreferrer">UInt64</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Input_IInputRoot">IInputRoot</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Input_Raw_RawKeyEventType">RawKeyEventType</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Input_Key">Key</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Input_RawInputModifiers">RawInputModifiers</a></dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Input_Raw_RawKeyEventArgs">RawKeyEventArgs Class</a>  
<a href="Overload_Avalonia_Input_Raw_RawKeyEventArgs__ctor">RawKeyEventArgs Overload</a>  
<a href="N_Avalonia_Input_Raw">Avalonia.Input.Raw Namespace</a>  
