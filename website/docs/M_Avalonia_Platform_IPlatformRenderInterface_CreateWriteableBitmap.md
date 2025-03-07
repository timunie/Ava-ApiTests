# CreateWriteableBitmap Method


Creates a writeable bitmap implementation.



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
IWriteableBitmapImpl CreateWriteableBitmap(
	PixelSize size,
	Vector dpi,
	PixelFormat format,
	AlphaFormat alphaFormat
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function CreateWriteableBitmap ( 
	size As PixelSize,
	dpi As Vector,
	format As PixelFormat,
	alphaFormat As AlphaFormat
) As IWriteableBitmapImpl
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract CreateWriteableBitmap : 
        size : PixelSize * 
        dpi : Vector * 
        format : PixelFormat * 
        alphaFormat : AlphaFormat -> IWriteableBitmapImpl 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/IPlatformRenderInterface.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_PixelSize">PixelSize</a></dt><dd>The size of the bitmap in device pixels.</dd><dt>  <a href="T_Avalonia_Vector">Vector</a></dt><dd>The DPI of the bitmap.</dd><dt>  <a href="T_Avalonia_Platform_PixelFormat">PixelFormat</a></dt><dd>Pixel format.</dd><dt>  <a href="T_Avalonia_Platform_AlphaFormat">AlphaFormat</a></dt><dd>Alpha format .</dd></dl>

#### Return Value
<a href="T_Avalonia_Platform_IWriteableBitmapImpl">IWriteableBitmapImpl</a>  
An <a href="T_Avalonia_Platform_IWriteableBitmapImpl">IWriteableBitmapImpl</a>.

## See Also


#### Reference
<a href="T_Avalonia_Platform_IPlatformRenderInterface">IPlatformRenderInterface Interface</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
