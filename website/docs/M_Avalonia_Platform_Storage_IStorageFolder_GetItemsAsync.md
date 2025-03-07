# GetItemsAsync Method


Gets the files and subfolders in the current folder.



## Definition
**Namespace:** <a href="N_Avalonia_Platform_Storage">Avalonia.Platform.Storage</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
IAsyncEnumerable<IStorageItem> GetItemsAsync()
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function GetItemsAsync As IAsyncEnumerable(Of IStorageItem)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract GetItemsAsync : unit -> IAsyncEnumerable<IStorageItem> 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/Storage/IStorageFolder.cs" title="View the source code">View Source</a>



#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.iasyncenumerable-1" target="_blank" rel="noopener noreferrer">IAsyncEnumerable</a>(<a href="T_Avalonia_Platform_Storage_IStorageItem">IStorageItem</a>)  
When this method completes successfully, it returns a list of the files and folders in the current folder. Each item in the list is represented by an <a href="T_Avalonia_Platform_Storage_IStorageItem">IStorageItem</a> implementation object.

## See Also


#### Reference
<a href="T_Avalonia_Platform_Storage_IStorageFolder">IStorageFolder Interface</a>  
<a href="N_Avalonia_Platform_Storage">Avalonia.Platform.Storage Namespace</a>  
