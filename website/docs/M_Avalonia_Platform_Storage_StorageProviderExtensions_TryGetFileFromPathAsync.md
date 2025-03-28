# TryGetFileFromPathAsync Method


Attempts to read file from the file-system by its path.



## Definition
**Namespace:** <a href="N_Avalonia_Platform_Storage">Avalonia.Platform.Storage</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static Task<IStorageFile?> TryGetFileFromPathAsync(
	this IStorageProvider provider,
	string filePath
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<ExtensionAttribute>
Public Shared Function TryGetFileFromPathAsync ( 
	provider As IStorageProvider,
	filePath As String
) As Task(Of IStorageFile)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<ExtensionAttribute>]
static member TryGetFileFromPathAsync : 
        provider : IStorageProvider * 
        filePath : string -> Task<IStorageFile> 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/Storage/StorageProviderExtensions.cs#L15" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Platform_Storage_IStorageProvider">IStorageProvider</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd>The path of the item to retrieve in Uri format.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1" target="_blank" rel="noopener noreferrer">Task</a>(<a href="T_Avalonia_Platform_Storage_IStorageFile">IStorageFile</a>)  
File or null if it doesn't exist.

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_Platform_Storage_IStorageProvider">IStorageProvider</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## Remarks
Uri path is usually expected to be an absolute path with "file" scheme. But it can be an uri with "content" scheme on the Android. It also might ask user for the permission, and throw an exception if it was denied.

## See Also


#### Reference
<a href="T_Avalonia_Platform_Storage_StorageProviderExtensions">StorageProviderExtensions Class</a>  
<a href="N_Avalonia_Platform_Storage">Avalonia.Platform.Storage Namespace</a>  

