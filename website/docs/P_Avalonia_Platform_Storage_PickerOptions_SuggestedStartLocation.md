# SuggestedStartLocation Property


Gets or sets the initial location where the file open picker looks for files to present to the user. Can be obtained from previously picked folder or using <a href="M_Avalonia_Platform_Storage_IStorageProvider_TryGetFolderFromPathAsync">TryGetFolderFromPathAsync(Uri)</a> or <a href="M_Avalonia_Platform_Storage_IStorageProvider_TryGetWellKnownFolderAsync">TryGetWellKnownFolderAsync(WellKnownFolder)</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Platform_Storage">Avalonia.Platform.Storage</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public IStorageFolder? SuggestedStartLocation { get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property SuggestedStartLocation As IStorageFolder
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member SuggestedStartLocation : IStorageFolder with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/Storage/PickerOptions.cs#L21" title="View the source code">View Source</a>



#### Property Value
<a href="T_Avalonia_Platform_Storage_IStorageFolder">IStorageFolder</a>

## See Also


#### Reference
<a href="T_Avalonia_Platform_Storage_PickerOptions">PickerOptions Class</a>  
<a href="N_Avalonia_Platform_Storage">Avalonia.Platform.Storage Namespace</a>  

