# Avalonia.Platform.Storage Namespace






## Classes
<table>
<tr>
<td><a href="T_Avalonia_Platform_Storage_FilePickerFileType">FilePickerFileType</a></td>
<td>Represents a name mapped to the associated file types (extensions).</td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_Storage_FilePickerFileTypes">FilePickerFileTypes</a></td>
<td>Dictionary of well known file types.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_Storage_FilePickerOpenOptions">FilePickerOpenOptions</a></td>
<td>Options class for <a href="M_Avalonia_Platform_Storage_IStorageProvider_OpenFilePickerAsync">OpenFilePickerAsync(FilePickerOpenOptions)</a> method.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_Storage_FilePickerSaveOptions">FilePickerSaveOptions</a></td>
<td>Options class for <a href="M_Avalonia_Platform_Storage_IStorageProvider_SaveFilePickerAsync">SaveFilePickerAsync(FilePickerSaveOptions)</a> method.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_Storage_FolderPickerOpenOptions">FolderPickerOpenOptions</a></td>
<td>Options class for <a href="M_Avalonia_Platform_Storage_IStorageProvider_OpenFolderPickerAsync">OpenFolderPickerAsync(FolderPickerOpenOptions)</a> method.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_Storage_LauncherExtensions">LauncherExtensions</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_Storage_PickerOptions">PickerOptions</a></td>
<td>Common options for <a href="M_Avalonia_Platform_Storage_IStorageProvider_OpenFolderPickerAsync">OpenFolderPickerAsync(FolderPickerOpenOptions)</a>, <a href="M_Avalonia_Platform_Storage_IStorageProvider_OpenFilePickerAsync">OpenFilePickerAsync(FilePickerOpenOptions)</a> and <a href="M_Avalonia_Platform_Storage_IStorageProvider_SaveFilePickerAsync">SaveFilePickerAsync(FilePickerSaveOptions)</a> methods.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_Storage_StorageItemProperties">StorageItemProperties</a></td>
<td>Provides access to the content-related properties of an item (like a file or folder).</td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_Storage_StorageProviderExtensions">StorageProviderExtensions</a></td>
<td>Group of public extensions for <a href="T_Avalonia_Platform_Storage_IStorageProvider">IStorageProvider</a> class.</td>
</tr>
</table>

## Interfaces
<table>
<tr>
<td><a href="T_Avalonia_Platform_Storage_ILauncher">ILauncher</a></td>
<td>Starts the default app associated with the specified file or URI.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_Storage_IStorageBookmarkFile">IStorageBookmarkFile</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_Storage_IStorageBookmarkFolder">IStorageBookmarkFolder</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_Storage_IStorageBookmarkItem">IStorageBookmarkItem</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_Storage_IStorageFile">IStorageFile</a></td>
<td>Represents a file. Provides information about the file and its contents, and ways to manipulate them.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_Storage_IStorageFolder">IStorageFolder</a></td>
<td>Manipulates folders and their contents, and provides information about them.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_Storage_IStorageItem">IStorageItem</a></td>
<td>Manipulates storage items (files and folders) and their contents, and provides information about them</td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_Storage_IStorageProvider">IStorageProvider</a></td>
<td> </td>
</tr>
</table>

## Enumerations
<table>
<tr>
<td><a href="T_Avalonia_Platform_Storage_WellKnownFolder">WellKnownFolder</a></td>
<td>Specifies enumerated constants used to retrieve directory paths to system well known folders.</td>
</tr>
</table>