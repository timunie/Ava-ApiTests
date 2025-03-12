# MoveAsync Method


Moves the current storage item and it's contents to a <a href="T_Avalonia_Platform_Storage_IStorageFolder">IStorageFolder</a>



## Definition
**Namespace:** <a href="N_Avalonia_Platform_Storage">Avalonia.Platform.Storage</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
Task<IStorageItem?> MoveAsync(
	IStorageFolder destination
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function MoveAsync ( 
	destination As IStorageFolder
) As Task(Of IStorageItem)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract MoveAsync : 
        destination : IStorageFolder -> Task<IStorageItem> 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/Storage/IStorageItem.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Platform_Storage_IStorageFolder">IStorageFolder</a></dt><dd>The <a href="T_Avalonia_Platform_Storage_IStorageFolder">IStorageFolder</a> to move the item into</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1" target="_blank" rel="noopener noreferrer">Task</a>(<a href="T_Avalonia_Platform_Storage_IStorageItem">IStorageItem</a>)  


## See Also


#### Reference
<a href="T_Avalonia_Platform_Storage_IStorageItem">IStorageItem Interface</a>  
<a href="N_Avalonia_Platform_Storage">Avalonia.Platform.Storage Namespace</a>  

