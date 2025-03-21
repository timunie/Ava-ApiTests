# ToHsl(Byte, Byte, Byte, Byte) Method


Converts the given RGBA color component values to their HSL color equivalent.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static HslColor ToHsl(
	byte red,
	byte green,
	byte blue,
	byte alpha = 255
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function ToHsl ( 
	red As Byte,
	green As Byte,
	blue As Byte,
	Optional alpha As Byte = 255
) As HslColor
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member ToHsl : 
        red : byte * 
        green : byte * 
        blue : byte * 
        ?alpha : byte 
(* Defaults:
        let _alpha = defaultArg alpha 255
*)
-> HslColor 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/Color.cs#L540" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.byte" target="_blank" rel="noopener noreferrer">Byte</a></dt><dd>The Red component in the RGB color model.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.byte" target="_blank" rel="noopener noreferrer">Byte</a></dt><dd>The Green component in the RGB color model.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.byte" target="_blank" rel="noopener noreferrer">Byte</a></dt><dd>The Blue component in the RGB color model.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.byte" target="_blank" rel="noopener noreferrer">Byte</a>  (Optional)</dt><dd>The Alpha component.</dd></dl>

#### Return Value
<a href="T_Avalonia_Media_HslColor">HslColor</a>  
A new <a href="T_Avalonia_Media_HslColor">HslColor</a> equivalent to the given RGBA values.

## See Also


#### Reference
<a href="T_Avalonia_Media_Color">Color Structure</a>  
<a href="Overload_Avalonia_Media_Color_ToHsl">ToHsl Overload</a>  
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  

