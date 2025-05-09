# SaveImage(SKImage, Stream, Nullable&lt;Int32&gt;) Method


Save Skia image to a stream.



## Definition
**Namespace:** <a href="N_Avalonia_Skia_Helpers">Avalonia.Skia.Helpers</a>  
**Assembly:** Avalonia.Skia (in Avalonia.Skia.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static void SaveImage(
	SKImage image,
	Stream stream,
	int? quality = null
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Sub SaveImage ( 
	image As SKImage,
	stream As Stream,
	Optional quality As Integer? = Nothing
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member SaveImage : 
        image : SKImage * 
        stream : Stream * 
        ?quality : Nullable<int> 
(* Defaults:
        let _quality = defaultArg quality null
*)
-> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Skia/Avalonia.Skia/Helpers/ImageSavingHelper.cs#L45" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  SKImage</dt><dd>Image to save</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.io.stream" target="_blank" rel="noopener noreferrer">Stream</a></dt><dd>The output stream to save the image.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.nullable-1" target="_blank" rel="noopener noreferrer">Nullable</a>(<a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a>)  (Optional)</dt><dd>The optional quality for PNG compression. The quality value is interpreted from 0 - 100. If quality is null the encoder applies the default quality value.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Skia_Helpers_ImageSavingHelper">ImageSavingHelper Class</a>  
<a href="Overload_Avalonia_Skia_Helpers_ImageSavingHelper_SaveImage">SaveImage Overload</a>  
<a href="N_Avalonia_Skia_Helpers">Avalonia.Skia.Helpers Namespace</a>  

