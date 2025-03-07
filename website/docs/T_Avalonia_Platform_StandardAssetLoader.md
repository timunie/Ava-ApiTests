# StandardAssetLoader Class


Loads assets compiled into the application binary.



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class StandardAssetLoader : IAssetLoader
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class StandardAssetLoader
	Implements IAssetLoader
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type StandardAssetLoader = 
    class
        interface IAssetLoader
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/StandardAssetLoader.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  StandardAssetLoader</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Platform_IAssetLoader">IAssetLoader</a></td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Platform_StandardAssetLoader__ctor">StandardAssetLoader(Assembly)</a></td>
<td>Initializes a new instance of the StandardAssetLoader class</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Equals(Object)</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_StandardAssetLoader_Exists">Exists(Uri, Uri)</a></td>
<td>Checks if an asset with the specified URI exists.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.finalize" target="_blank" rel="noopener noreferrer">Finalize()</a></td>
<td>Allows an object to try to free resources and perform other cleanup operations before it is reclaimed by garbage collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_StandardAssetLoader_GetAssembly">GetAssembly(Uri, Uri)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_StandardAssetLoader_GetAssets">GetAssets(Uri, Uri)</a></td>
<td>Gets all assets of a folder and subfolders that match specified uri.</td>
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
<td><a href="M_Avalonia_Platform_StandardAssetLoader_InvalidateAssemblyCache">InvalidateAssemblyCache()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_StandardAssetLoader_InvalidateAssemblyCache_1">InvalidateAssemblyCache(String)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_StandardAssetLoader_Open">Open(Uri, Uri)</a></td>
<td>Opens the asset with the requested URI.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_StandardAssetLoader_OpenAndGetAssembly">OpenAndGetAssembly(Uri, Uri)</a></td>
<td>Opens the asset with the requested URI and returns the asset stream and the assembly containing the asset.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_StandardAssetLoader_RegisterResUriParsers">RegisterResUriParsers()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_StandardAssetLoader_SetDefaultAssembly">SetDefaultAssembly(Assembly)</a></td>
<td>Sets the default assembly from which to load assets for which no assembly is specified.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
