# Save(String, Nullable&lt;Int32&gt;) Method


Saves the bitmap to a file.



## Definition
**Namespace:** <a href="N_Avalonia_Media_Imaging">Avalonia.Media.Imaging</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public void Save(
	string fileName,
	int? quality = null
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub Save ( 
	fileName As String,
	Optional quality As Integer? = Nothing
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract Save : 
        fileName : string * 
        ?quality : Nullable<int> 
(* Defaults:
        let _quality = defaultArg quality null
*)
-> unit 
override Save : 
        fileName : string * 
        ?quality : Nullable<int> 
(* Defaults:
        let _quality = defaultArg quality null
*)
-> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/Imaging/Bitmap.cs#L161" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd>The filename.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.nullable-1" target="_blank" rel="noopener noreferrer">Nullable</a>(<a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a>)  (Optional)</dt><dd>The optional quality for compression. The quality value is interpreted from 0 - 100. If quality is null the default quality setting is applied.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Media_Imaging_Bitmap">Bitmap Class</a>  
<a href="Overload_Avalonia_Media_Imaging_Bitmap_Save">Save Overload</a>  
<a href="N_Avalonia_Media_Imaging">Avalonia.Media.Imaging Namespace</a>  

