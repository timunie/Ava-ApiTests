# CopyPixels(ILockedFramebuffer, AlphaFormat) Method


Copies pixels to the target buffer and transcodes the pixel and alpha format if needed.



## Definition
**Namespace:** <a href="N_Avalonia_Media_Imaging">Avalonia.Media.Imaging</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public void CopyPixels(
	ILockedFramebuffer buffer,
	AlphaFormat alphaFormat
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub CopyPixels ( 
	buffer As ILockedFramebuffer,
	alphaFormat As AlphaFormat
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member CopyPixels : 
        buffer : ILockedFramebuffer * 
        alphaFormat : AlphaFormat -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/Imaging/Bitmap.cs#L244" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Platform_ILockedFramebuffer">ILockedFramebuffer</a></dt><dd>The target buffer.</dd><dt>  <a href="T_Avalonia_Platform_AlphaFormat">AlphaFormat</a></dt><dd>The alpha format.</dd></dl>

## Exceptions
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.notsupportedexception" target="_blank" rel="noopener noreferrer">NotSupportedException</a></td>
<td />
</tr>
</table>

## See Also


#### Reference
<a href="T_Avalonia_Media_Imaging_Bitmap">Bitmap Class</a>  
<a href="Overload_Avalonia_Media_Imaging_Bitmap_CopyPixels">CopyPixels Overload</a>  
<a href="N_Avalonia_Media_Imaging">Avalonia.Media.Imaging Namespace</a>  

