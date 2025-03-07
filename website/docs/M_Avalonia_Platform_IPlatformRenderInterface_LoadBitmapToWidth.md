# LoadBitmapToWidth Method


Loads a bitmap implementation from a stream to a specified width maintaining aspect ratio.



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
IBitmapImpl LoadBitmapToWidth(
	Stream stream,
	int width,
	BitmapInterpolationMode interpolationMode = BitmapInterpolationMode.HighQuality
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function LoadBitmapToWidth ( 
	stream As Stream,
	width As Integer,
	Optional interpolationMode As BitmapInterpolationMode = BitmapInterpolationMode.HighQuality
) As IBitmapImpl
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract LoadBitmapToWidth : 
        stream : Stream * 
        width : int * 
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
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.io.stream" target="_blank" rel="noopener noreferrer">Stream</a></dt><dd>The stream to read the bitmap from.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd>The desired width of the resulting bitmap.</dd><dt>  <a href="T_Avalonia_Media_Imaging_BitmapInterpolationMode">BitmapInterpolationMode</a>  (Optional)</dt><dd>The <a href="T_Avalonia_Media_Imaging_BitmapInterpolationMode">BitmapInterpolationMode</a> to use should resizing be required.</dd></dl>

#### Return Value
<a href="T_Avalonia_Platform_IBitmapImpl">IBitmapImpl</a>  
An <a href="T_Avalonia_Platform_IBitmapImpl">IBitmapImpl</a>.

## See Also


#### Reference
<a href="T_Avalonia_Platform_IPlatformRenderInterface">IPlatformRenderInterface Interface</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
