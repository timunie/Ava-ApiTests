# IGlExportableExternalImageTexture Interface




## Definition
**Namespace:** <a href="N_Avalonia_OpenGL">Avalonia.OpenGL</a>  
**Assembly:** Avalonia.OpenGL (in Avalonia.OpenGL.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface IGlExportableExternalImageTexture : IGlExternalImageTexture, 
	IDisposable
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface IGlExportableExternalImageTexture
	Inherits IGlExternalImageTexture, IDisposable
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type IGlExportableExternalImageTexture = 
    interface
        interface IGlExternalImageTexture
        interface IDisposable
    end
```
</TabItem>
</Tabs>

<table>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_OpenGL_IGlExternalImageTexture">IGlExternalImageTexture</a>, <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a></td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_OpenGL_IGlExternalImageTexture_InternalFormat">InternalFormat</a></td>
<td><br />(Inherited from <a href="T_Avalonia_OpenGL_IGlExternalImageTexture">IGlExternalImageTexture</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_OpenGL_IGlExternalImageTexture_Properties">Properties</a></td>
<td><br />(Inherited from <a href="T_Avalonia_OpenGL_IGlExternalImageTexture">IGlExternalImageTexture</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_OpenGL_IGlExternalImageTexture_TextureId">TextureId</a></td>
<td><br />(Inherited from <a href="T_Avalonia_OpenGL_IGlExternalImageTexture">IGlExternalImageTexture</a>)</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_OpenGL_IGlExternalImageTexture_AcquireKeyedMutex">AcquireKeyedMutex(UInt32)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_OpenGL_IGlExternalImageTexture">IGlExternalImageTexture</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.idisposable.dispose" target="_blank" rel="noopener noreferrer">Dispose()</a></td>
<td>Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_IGlExportableExternalImageTexture_GetHandle">GetHandle()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_IGlExternalImageTexture_ReleaseKeyedMutex">ReleaseKeyedMutex(UInt32)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_OpenGL_IGlExternalImageTexture">IGlExternalImageTexture</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_OpenGL">Avalonia.OpenGL Namespace</a>  
