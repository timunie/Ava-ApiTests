# Save(Stream, Nullable&lt;Int32&gt;) Method


Saves the bitmap to a stream.



## Definition
**Namespace:** <a href="N_Avalonia_Media_Imaging">Avalonia.Media.Imaging</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public void Save(
	Stream stream,
	int? quality = null
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub Save ( 
	stream As Stream,
	Optional quality As Integer? = Nothing
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract Save : 
        stream : Stream * 
        ?quality : Nullable<int> 
(* Defaults:
        let _quality = defaultArg quality null
*)
-> unit 
override Save : 
        stream : Stream * 
        ?quality : Nullable<int> 
(* Defaults:
        let _quality = defaultArg quality null
*)
-> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/Imaging/Bitmap.cs#L175" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.io.stream" target="_blank" rel="noopener noreferrer">Stream</a></dt><dd>The stream.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.nullable-1" target="_blank" rel="noopener noreferrer">Nullable</a>(<a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a>)  (Optional)</dt><dd>The optional quality for compression. The quality value is interpreted from 0 - 100. If quality is null the default quality setting is applied.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Media_Imaging_Bitmap">Bitmap Class</a>  
<a href="Overload_Avalonia_Media_Imaging_Bitmap_Save">Save Overload</a>  
<a href="N_Avalonia_Media_Imaging">Avalonia.Media.Imaging Namespace</a>  

