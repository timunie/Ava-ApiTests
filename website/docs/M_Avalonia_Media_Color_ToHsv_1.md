# ToHsv(Byte, Byte, Byte, Byte) Method


Converts the given RGBA color component values to their HSV color equivalent.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static HsvColor ToHsv(
	byte red,
	byte green,
	byte blue,
	byte alpha = 255
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function ToHsv ( 
	red As Byte,
	green As Byte,
	blue As Byte,
	Optional alpha As Byte = 255
) As HsvColor
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member ToHsv : 
        red : byte * 
        green : byte * 
        blue : byte * 
        ?alpha : byte 
(* Defaults:
        let _alpha = defaultArg alpha 255
*)
-> HsvColor 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/Color.cs#L614" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.byte" target="_blank" rel="noopener noreferrer">Byte</a></dt><dd>The Red component in the RGB color model.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.byte" target="_blank" rel="noopener noreferrer">Byte</a></dt><dd>The Green component in the RGB color model.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.byte" target="_blank" rel="noopener noreferrer">Byte</a></dt><dd>The Blue component in the RGB color model.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.byte" target="_blank" rel="noopener noreferrer">Byte</a>  (Optional)</dt><dd>The Alpha component.</dd></dl>

#### Return Value
<a href="T_Avalonia_Media_HsvColor">HsvColor</a>  
A new <a href="T_Avalonia_Media_HsvColor">HsvColor</a> equivalent to the given RGBA values.

## See Also


#### Reference
<a href="T_Avalonia_Media_Color">Color Structure</a>  
<a href="Overload_Avalonia_Media_Color_ToHsv">ToHsv Overload</a>  
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  

