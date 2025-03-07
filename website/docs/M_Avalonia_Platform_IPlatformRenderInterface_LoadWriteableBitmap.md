# LoadWriteableBitmap(Stream) Method


Loads a WriteableBitmap implementation from a file.



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
IWriteableBitmapImpl LoadWriteableBitmap(
	Stream stream
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function LoadWriteableBitmap ( 
	stream As Stream
) As IWriteableBitmapImpl
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract LoadWriteableBitmap : 
        stream : Stream -> IWriteableBitmapImpl 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/IPlatformRenderInterface.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.io.stream" target="_blank" rel="noopener noreferrer">Stream</a></dt><dd>The stream to read the bitmap from.</dd></dl>

#### Return Value
<a href="T_Avalonia_Platform_IWriteableBitmapImpl">IWriteableBitmapImpl</a>  
An <a href="T_Avalonia_Platform_IBitmapImpl">IBitmapImpl</a>.

## See Also


#### Reference
<a href="T_Avalonia_Platform_IPlatformRenderInterface">IPlatformRenderInterface Interface</a>  
<a href="Overload_Avalonia_Platform_IPlatformRenderInterface_LoadWriteableBitmap">LoadWriteableBitmap Overload</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
