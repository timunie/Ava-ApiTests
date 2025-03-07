# MaxGpuResourceSizeBytes Property


The maximum number of bytes for video memory to store textures and resources.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Skia (in Avalonia.Skia.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public long? MaxGpuResourceSizeBytes \{ get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property MaxGpuResourceSizeBytes As Long?
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member MaxGpuResourceSizeBytes : Nullable<int64> with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Skia/Avalonia.Skia/SkiaOptions.cs#L18" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.nullable-1" target="_blank" rel="noopener noreferrer">Nullable</a>(<a href="https://learn.microsoft.com/dotnet/api/system.int64" target="_blank" rel="noopener noreferrer">Int64</a>)This is set by default to the recommended value for Avalonia. Setting this to null will give you the default Skia value.

## See Also


#### Reference
<a href="T_Avalonia_SkiaOptions">SkiaOptions Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  
