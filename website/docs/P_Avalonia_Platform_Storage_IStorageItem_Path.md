# Path Property


Gets the file-system path of the item.



## Definition
**Namespace:** <a href="N_Avalonia_Platform_Storage">Avalonia.Platform.Storage</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
Uri Path { get; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
ReadOnly Property Path As Uri
	Get
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract Path : Uri with get
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/Storage/IStorageItem.cs" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.uri" target="_blank" rel="noopener noreferrer">Uri</a>Android backend might return file path with "content:" scheme. Browser and iOS backends might return relative uris.

## See Also


#### Reference
<a href="T_Avalonia_Platform_Storage_IStorageItem">IStorageItem Interface</a>  
<a href="N_Avalonia_Platform_Storage">Avalonia.Platform.Storage Namespace</a>  

