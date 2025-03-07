# LoadBitmap(Stream) Method


Loads a bitmap implementation from a file..



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
IBitmapImpl LoadBitmap(
	Stream stream
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function LoadBitmap ( 
	stream As Stream
) As IBitmapImpl
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract LoadBitmap : 
        stream : Stream -> IBitmapImpl 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/IPlatformRenderInterface.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.io.stream" target="_blank" rel="noopener noreferrer">Stream</a></dt><dd>The stream to read the bitmap from.</dd></dl>

#### Return Value
<a href="T_Avalonia_Platform_IBitmapImpl">IBitmapImpl</a>  
An <a href="T_Avalonia_Platform_IBitmapImpl">IBitmapImpl</a>.

## See Also


#### Reference
<a href="T_Avalonia_Platform_IPlatformRenderInterface">IPlatformRenderInterface Interface</a>  
<a href="Overload_Avalonia_Platform_IPlatformRenderInterface_LoadBitmap">LoadBitmap Overload</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
