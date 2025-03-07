# ResizeBitmap Method




## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
IBitmapImpl ResizeBitmap(
	IBitmapImpl bitmapImpl,
	PixelSize destinationSize,
	BitmapInterpolationMode interpolationMode = BitmapInterpolationMode.HighQuality
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function ResizeBitmap ( 
	bitmapImpl As IBitmapImpl,
	destinationSize As PixelSize,
	Optional interpolationMode As BitmapInterpolationMode = BitmapInterpolationMode.HighQuality
) As IBitmapImpl
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract ResizeBitmap : 
        bitmapImpl : IBitmapImpl * 
        destinationSize : PixelSize * 
        ?interpolationMode : BitmapInterpolationMode 
(* Defaults:
        let _interpolationMode = defaultArg interpolationMode BitmapInterpolationMode.HighQuality
*)
-> IBitmapImpl 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/IPlatformRenderInterface.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Platform_IBitmapImpl">IBitmapImpl</a></dt><dd> </dd><dt>  <a href="T_Avalonia_PixelSize">PixelSize</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Media_Imaging_BitmapInterpolationMode">BitmapInterpolationMode</a>  (Optional)</dt><dd> </dd></dl>

#### Return Value
<a href="T_Avalonia_Platform_IBitmapImpl">IBitmapImpl</a>

## See Also


#### Reference
<a href="T_Avalonia_Platform_IPlatformRenderInterface">IPlatformRenderInterface Interface</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
