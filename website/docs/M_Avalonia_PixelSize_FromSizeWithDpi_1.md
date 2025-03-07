# FromSizeWithDpi(Size, Double) Method


Converts a <a href="T_Avalonia_Size">Size</a> to device pixels using the specified dots per inch (DPI).



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static PixelSize FromSizeWithDpi(
	Size size,
	double dpi
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function FromSizeWithDpi ( 
	size As Size,
	dpi As Double
) As PixelSize
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member FromSizeWithDpi : 
        size : Size * 
        dpi : float -> PixelSize 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/PixelSize.cs#L223" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Size">Size</a></dt><dd>The size.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd>The dots per inch.</dd></dl>

#### Return Value
<a href="T_Avalonia_PixelSize">PixelSize</a>  
The device-independent size.

## See Also


#### Reference
<a href="T_Avalonia_PixelSize">PixelSize Structure</a>  
<a href="Overload_Avalonia_PixelSize_FromSizeWithDpi">FromSizeWithDpi Overload</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  
