# RawTextInputEventArgs Constructor


Initializes a new instance of the <a href="T_Avalonia_Input_Raw_RawTextInputEventArgs">RawTextInputEventArgs</a> class



## Definition
**Namespace:** <a href="N_Avalonia_Input_Raw">Avalonia.Input.Raw</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public RawTextInputEventArgs(
	IKeyboardDevice device,
	ulong timestamp,
	IInputRoot root,
	string text
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub New ( 
	device As IKeyboardDevice,
	timestamp As ULong,
	root As IInputRoot,
	text As String
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
new : 
        device : IKeyboardDevice * 
        timestamp : uint64 * 
        root : IInputRoot * 
        text : string -> RawTextInputEventArgs
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Input/Raw/RawTextInputEventArgs.cs#L13" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Input_IKeyboardDevice">IKeyboardDevice</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.uint64" target="_blank" rel="noopener noreferrer">UInt64</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Input_IInputRoot">IInputRoot</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Input_Raw_RawTextInputEventArgs">RawTextInputEventArgs Class</a>  
<a href="N_Avalonia_Input_Raw">Avalonia.Input.Raw Namespace</a>  
