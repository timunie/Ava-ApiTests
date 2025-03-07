# IAssetLoader Methods




## Methods
<table>
<tr>
<td><a href="M_Avalonia_Platform_IAssetLoader_Exists">Exists(Uri, Uri)</a></td>
<td>Checks if an asset with the specified URI exists.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IAssetLoader_GetAssembly">GetAssembly(Uri, Uri)</a></td>
<td>Extracts assembly information from URI</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IAssetLoader_GetAssets">GetAssets(Uri, Uri)</a></td>
<td>Gets all assets of a folder and subfolders that match specified uri.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IAssetLoader_InvalidateAssemblyCache">InvalidateAssemblyCache()</a></td>
<td>Removes all assemblies from the cache.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IAssetLoader_InvalidateAssemblyCache_1">InvalidateAssemblyCache(String)</a></td>
<td>Removes the assembly from the cache.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IAssetLoader_Open">Open(Uri, Uri)</a></td>
<td>Opens the asset with the requested URI.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IAssetLoader_OpenAndGetAssembly">OpenAndGetAssembly(Uri, Uri)</a></td>
<td>Opens the asset with the requested URI and returns the asset stream and the assembly containing the asset.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IAssetLoader_SetDefaultAssembly">SetDefaultAssembly(Assembly)</a></td>
<td>We need a way to override the default assembly selected by the host platform because right now it is selecting the wrong one for PCL based Apps. The AssetLoader needs a refactor cause right now it lives in 3+ platforms which can all be loaded on Windows.</td>
</tr>
</table>

## See Also


#### Reference
<a href="T_Avalonia_Platform_IAssetLoader">IAssetLoader Interface</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
