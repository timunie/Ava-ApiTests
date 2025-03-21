# FilePickerSaveOptions Class


Options class for <a href="M_Avalonia_Platform_Storage_IStorageProvider_SaveFilePickerAsync">SaveFilePickerAsync(FilePickerSaveOptions)</a> method.



## Definition
**Namespace:** <a href="N_Avalonia_Platform_Storage">Avalonia.Platform.Storage</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class FilePickerSaveOptions : PickerOptions
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class FilePickerSaveOptions
	Inherits PickerOptions
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type FilePickerSaveOptions = 
    class
        inherit PickerOptions
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/Storage/FilePickerSaveOptions.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="T_Avalonia_Platform_Storage_PickerOptions">PickerOptions</a>  →  FilePickerSaveOptions</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Platform_Storage_FilePickerSaveOptions__ctor">FilePickerSaveOptions()</a></td>
<td>Initializes a new instance of the FilePickerSaveOptions class</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Platform_Storage_FilePickerSaveOptions_DefaultExtension">DefaultExtension</a></td>
<td>Gets or sets the default extension to be used to save the file.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_Storage_FilePickerSaveOptions_FileTypeChoices">FileTypeChoices</a></td>
<td>Gets or sets the collection of valid file types that the user can choose to assign to a file.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_Storage_FilePickerSaveOptions_ShowOverwritePrompt">ShowOverwritePrompt</a></td>
<td>Gets or sets a value indicating whether file open picker displays a warning if the user specifies the name of a file that already exists.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_Storage_PickerOptions_SuggestedFileName">SuggestedFileName</a></td>
<td>Gets or sets the file name that the file picker suggests to the user.<br />(Inherited from <a href="T_Avalonia_Platform_Storage_PickerOptions">PickerOptions</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_Storage_PickerOptions_SuggestedStartLocation">SuggestedStartLocation</a></td>
<td>Gets or sets the initial location where the file open picker looks for files to present to the user. Can be obtained from previously picked folder or using <a href="M_Avalonia_Platform_Storage_IStorageProvider_TryGetFolderFromPathAsync">TryGetFolderFromPathAsync(Uri)</a> or <a href="M_Avalonia_Platform_Storage_IStorageProvider_TryGetWellKnownFolderAsync">TryGetWellKnownFolderAsync(WellKnownFolder)</a>.<br />(Inherited from <a href="T_Avalonia_Platform_Storage_PickerOptions">PickerOptions</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_Storage_PickerOptions_Title">Title</a></td>
<td>Gets or sets the text that appears in the title bar of a picker.<br />(Inherited from <a href="T_Avalonia_Platform_Storage_PickerOptions">PickerOptions</a>)</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Equals(Object)</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.finalize" target="_blank" rel="noopener noreferrer">Finalize()</a></td>
<td>Allows an object to try to free resources and perform other cleanup operations before it is reclaimed by garbage collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode" target="_blank" rel="noopener noreferrer">GetHashCode()</a></td>
<td>Serves as the default hash function.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Platform_Storage">Avalonia.Platform.Storage Namespace</a>  

